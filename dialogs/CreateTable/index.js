import { useState } from "react"

import {
    TextField,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core"

export const CreateTable = ({ onClose, onSubmit }) => {
    const [tableState, setTableState] = useState({})

    return (
        <>
            <DialogTitle id="form-dialog-title">Create a table</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                </DialogContentText>

                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title of board"
                    fullWidth
                    onChange={({ target }) =>
                        setTableState({
                            title: target.value,
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
                        onSubmit(tableState)
                        setTableState({})
                        onClose()
                    }}
                    color="primary"
                >
                    Add table
                </Button>
            </DialogActions>
        </>
    )
}
