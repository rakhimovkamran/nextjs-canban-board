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
                    Write the name of the table
                </DialogContentText>

                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title of table"
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
