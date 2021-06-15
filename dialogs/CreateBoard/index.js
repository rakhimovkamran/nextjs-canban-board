import { useState } from "react"

import {
    TextField,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core"

export const CreateBoard = ({ onClose, onSubmit }) => {
    const [boardState, setBoardState] = useState({})

    return (
        <>
            <DialogTitle id="form-dialog-title">Create a board</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Fill out the board content
                </DialogContentText>

                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title of board"
                    fullWidth
                    onChange={({ target }) =>
                        setBoardState({
                            ...boardState,
                            title: target.value,
                        })
                    }
                />
                <TextField
                    margin="dense"
                    id="description"
                    label="Description of board"
                    fullWidth
                    onChange={({ target }) =>
                        setBoardState({
                            ...boardState,
                            description: target.value,
                        })
                    }
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        onSubmit(boardState)
                        setBoardState({})
                        onClose()
                    }}
                    color="primary"
                >
                    Add board
                </Button>
            </DialogActions>
        </>
    )
}
