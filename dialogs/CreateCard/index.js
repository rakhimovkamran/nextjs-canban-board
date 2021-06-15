import { useState } from "react"

import {
    TextField,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core"

export const CreateCard = ({ onClose, onSubmit }) => {
    const [cardState, setCardState] = useState({})

    return (
        <>
            <DialogTitle id="form-dialog-title">Create a card</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                </DialogContentText>

                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title of card"
                    fullWidth
                    onChange={({ target }) =>
                        setCardState({
                            ...cardState,
                            title: target.value,
                        })
                    }
                />
                <TextField
                    margin="dense"
                    id="description"
                    label="Description of card"
                    fullWidth
                    onChange={({ target }) =>
                        setCardState({
                            ...cardState,
                            description: target.value,
                        })
                    }
                />

                <TextField
                    margin="dense"
                    id="body"
                    label="Body of card"
                    fullWidth
                    onChange={({ target }) =>
                        setCardState({
                            ...cardState,
                            body: target.value,
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
                        onSubmit(cardState)
                        setCardState({})
                        onClose()
                    }}
                    color="primary"
                >
                    Add card
                </Button>
            </DialogActions>
        </>
    )
}
