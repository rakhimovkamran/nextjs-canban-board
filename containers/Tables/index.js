import { useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import firebase from "firebase"
import { db } from "constants/firebase.config"

import { S } from "./index.styled"
import { I } from "./index.icons"
import { Table } from "components/Table"

import { Button, Dialog, CircularProgress } from "@material-ui/core"
import { CreateTable } from "dialogs/CreateTable"

import NoDataImage from "assets/svg/no-data.svg"

export const Tables = ({ boardID }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleCloseDialog = () => setIsDialogOpen(false)
    const handleOpenDialog = () => setIsDialogOpen(true)

    const [tables, isTablesLoading] = useCollection(
        db
            .collection("boards")
            .doc(boardID)
            .collection("tables")
            .orderBy("timestamp", "asc")
    )

    const handleCreateTable = ({ title }) => {
        if (title) {
            db.collection("boards").doc(boardID).collection("tables").add({
                title,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                cardsCount: 0,
            })
            setIsDialogOpen(false)
        }
    }

    return (
        <>
            {tables?.docs.length ? (
                <S.Container>
                    {tables.docs.map((table) => {
                        const { title } = table.data()
                        return (
                            <Table key={table.id} title={title} id={table.id} />
                        )
                    })}
                </S.Container>
            ) : (
                <>
                    {isTablesLoading ? (
                        <S.Empty>
                            <CircularProgress />
                        </S.Empty>
                    ) : (
                        <S.Empty>
                            <img src={NoDataImage} />
                            <h4>There are no tables yet</h4>
                            <Button
                                onClick={handleOpenDialog}
                                variant="outlined"
                                color="primary"
                                endIcon={<I.Add />}
                            >
                                Add table
                            </Button>
                        </S.Empty>
                    )}
                </>
            )}

            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                aria-labelledby="form-dialog-title"
            >
                <CreateTable
                    onClose={handleCloseDialog}
                    onSubmit={handleCreateTable}
                />
            </Dialog>
        </>
    )
}
