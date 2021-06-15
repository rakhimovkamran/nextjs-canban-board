import { useState } from "react"
import { Dialog } from "@material-ui/core"
import { CreateCard } from "dialogs/CreateCard"

import { S } from "./index.styled"
import { I } from "./index.icons"

import { useStateContext } from "context"

import firebase from "firebase"
import { db } from "constants/firebase.config"

export const AddCard = ({ tableID }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleCloseDialog = () => setIsDialogOpen(false)
    const handleOpenDialog = () => setIsDialogOpen(true)

    const { state } = useStateContext()

    const handleCreateCard = ({ title, description, body }) => {
        if (title && description && body) {
            db.collection("boards")
                .doc(state.boardID)
                .collection("tables")
                .doc(tableID)
                .collection("cards")
                .add({
                    title,
                    description,
                    body,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
        }
    }

    return (
        <>
            <S.Container onClick={handleOpenDialog}>
                <I.Add />
                Card
            </S.Container>

            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                aria-labelledby="form-dialog-title"
            >
                <CreateCard
                    onClose={handleCloseDialog}
                    onSubmit={handleCreateCard}
                />
            </Dialog>
        </>
    )
}
