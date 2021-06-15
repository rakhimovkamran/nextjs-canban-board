import { useState } from "react"

import { db } from "constants/firebase.config"
import firebase from "firebase"
import { useRouter } from "next/router"

import { IconButton, Avatar, Dialog } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import { CreateBoard } from "dialogs/CreateBoard"
import { CreateTable } from "dialogs/CreateTable"

import { S } from "./index.styled"
import { I } from "./index.icons"

import { useStateContext } from "context"
import { useDocument } from "react-firebase-hooks/firestore"

export const Header = () => {
    const router = useRouter()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleCloseDialog = () => setIsDialogOpen(false)
    const handleOpenDialog = () => setIsDialogOpen(true)

    const { state, dispatch } = useStateContext()

    const [boardDetail, isDetailsLoading] = useDocument(
        db.collection("boards").doc(state.boardID || "NULL")
    )

    const handleCreateBoard = ({ title, description }) => {
        if (title) {
            db.collection("boards").add({
                title,
                description,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            setIsDialogOpen(false)
        }
    }

    const handleCreateTable = ({ title }) => {
        if (title) {
            db.collection("boards")
                .doc(state.boardID)
                .collection("tables")
                .add({
                    title,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
            setIsDialogOpen(false)
        }
    }

    const handleBack = () => {
        router.push("/")
        dispatch({
            ...state,
            boardID: null,
        })
    }

    return (
        <>
            <S.Container>
                <S.Title>
                    <Avatar />
                    {state.boardID && (
                        <IconButton onClick={handleBack}>
                            <I.Back />
                        </IconButton>
                    )}

                    {isDetailsLoading ? (
                        <Skeleton animation="wave" width={230} height={40} />
                    ) : (
                        <h4>{boardDetail?.data()?.title || "Boards"}</h4>
                    )}
                </S.Title>

                <S.Search>
                    <S.Input>
                        <I.Search />
                        <input placeholder="Search" />
                    </S.Input>
                </S.Search>

                <S.Extra>
                    <IconButton>
                        <I.More />
                    </IconButton>

                    <IconButton onClick={handleOpenDialog}>
                        <I.Add />
                    </IconButton>
                </S.Extra>
            </S.Container>

            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                aria-labelledby="form-dialog-title"
            >
                {state.boardID ? (
                    <CreateTable
                        onClose={handleCloseDialog}
                        onSubmit={handleCreateTable}
                    />
                ) : (
                    <CreateBoard
                        onClose={handleCloseDialog}
                        onSubmit={handleCreateBoard}
                    />
                )}
            </Dialog>
        </>
    )
}
