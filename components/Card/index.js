import { S } from "./index.styled"
import { I } from "./index.icons"
import { DragDropContainer } from "react-drag-drop-container"
import { db } from "constants/firebase.config"
import { Menu, MenuItem } from "@material-ui/core"
import { useStateContext } from "context"
import { useState } from "react"

export const Card = ({ timestamp, title, description, body, tableID, id }) => {
    const { state } = useStateContext()

    const [anchorElement, setAnchorElement] = useState(null)
    const handleActionClick = (event) => {
        setAnchorElement(event.currentTarget)
    }
    const handleCloseActionsMenu = () => {
        setAnchorElement(null)
    }

    const deleteCurrentCard = () => {
        db.collection("boards")
            .doc(state.boardID)
            .collection("tables")
            .doc(tableID)
            .collection("cards")
            .doc(id)
            .delete()
    }

    return (
        <DragDropContainer
            dragData={{
                title,
                description,
                body,
                timestamp,
            }}
            onDrop={deleteCurrentCard}
            targetKey="cards"
        >
            <S.Container draggable={true}>
                <S.Headline>
                    <h4>{title}</h4>
                    <S.Actions>
                        <I.More onClick={handleActionClick} />
                        <I.Info />

                        <Menu
                            id="card-actions-menu"
                            anchorEl={anchorElement}
                            keepMounted
                            open={Boolean(anchorElement)}
                            onClose={handleCloseActionsMenu}
                        >
                            <MenuItem onClick={deleteCurrentCard}>
                                Delete
                            </MenuItem>
                        </Menu>
                    </S.Actions>
                </S.Headline>

                <p>{description}</p>
                <S.Meta>
                    <span>
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </span>
                </S.Meta>
            </S.Container>
        </DragDropContainer>
    )
}
