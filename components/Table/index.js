import { IconButton, LinearProgress, Menu, MenuItem } from "@material-ui/core"
import { db } from "constants/firebase.config"
import { useCollection } from "react-firebase-hooks/firestore"

import { S } from "./index.styled"
import { I } from "./index.icons"

import { AddCard } from "containers/AddCard"
import { Card } from "components/Card"

import { useStateContext } from "context"

import { DropTarget } from "react-drag-drop-container"
import { useState } from "react"

export const Table = ({ title, id }) => {
    const { state } = useStateContext()

    const [anchorElement, setAnchorElement] = useState(null)
    const handleActionClick = (event) => {
        setAnchorElement(event.currentTarget)
    }
    const handleCloseActionsMenu = () => {
        setAnchorElement(null)
    }

    const [cards, isCardsLoading] = useCollection(
        db
            .collection("boards")
            .doc(state.boardID || "NULL")
            .collection("tables")
            .doc(id)
            .collection("cards")
            .orderBy("timestamp", "asc")
    )

    const handleCardDrop = ({ dragData }) => {
        db.collection("boards")
            .doc(state.boardID)
            .collection("tables")
            .doc(id)
            .collection("cards")
            .add({
                ...dragData,
            })
    }

    const deleteCurrentTable = () => {
        db.collection("boards")
            .doc(state.boardID)
            .collection("tables")
            .doc(id)
            .delete()
    }

    return (
        <S.Container>
            <S.Info>
                <S.Meta>
                    <h4>{title}</h4>
                    <S.CardsCount>{cards?.docs.length || 0}</S.CardsCount>
                </S.Meta>

                <IconButton onClick={handleActionClick}>
                    <I.More />
                    <Menu
                        id="table-actions-menu"
                        anchorEl={anchorElement}
                        keepMounted
                        open={Boolean(anchorElement)}
                        onClose={handleCloseActionsMenu}
                    >
                        <MenuItem onClick={deleteCurrentTable}>
                            Delete Table
                        </MenuItem>
                    </Menu>
                </IconButton>
            </S.Info>

            <DropTarget onHit={handleCardDrop} targetKey="cards">
                <S.Cards>
                    {isCardsLoading ? (
                        <LinearProgress />
                    ) : (
                        <>
                            {cards?.docs.map((card) => {
                                const data = card.data()

                                return (
                                    <Card
                                        {...data}
                                        tableID={id}
                                        id={card.id}
                                        key={card.id}
                                    />
                                )
                            })}
                        </>
                    )}
                </S.Cards>
            </DropTarget>

            <AddCard tableID={id} />
        </S.Container>
    )
}
