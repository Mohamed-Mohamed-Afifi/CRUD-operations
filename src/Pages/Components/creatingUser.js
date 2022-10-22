import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';



export default function AddingDialog({ openDialog, handleClose, data, onChange }) {
    const onSubmit = (e) => {
        if (data.fullName === "" || data.DOB === "" || data.phone === "" || data.eMail === "")
            e.preventDefault();
        else {
            console.log(data);  
            data.fullName = "";
            data.DOB = "";
            data.phone = "";
            data.eMail = "";
            handleClose();
        }

    }
    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <Paper elevation={5}>
                    <DialogTitle id="alert-dialog-title">
                        <Grid align="center">

                            <PersonAddAltIcon />
                            <h2>Creating new user</h2>
                        </Grid>
                    </DialogTitle>
                </Paper>
                <Grid align="center">
                    <form style={{ width: "80%", marginBottom: "10px" }}>
                        <DialogContent>
                            <TextField
                                id="fullName"
                                placeholder="Enter your name"
                                label="name"
                                variant="standard"
                                margin="normal"
                                fullWidth
                                defaultValue={data.fullName}
                                onChange={e => onChange(e)}
                            />
                            <TextField
                                id="eMail"
                                placeholder="Enter your eMail"
                                label="E-mail"
                                variant="standard"
                                margin="normal"
                                fullWidth
                                defaultValue={data.eMail}
                                onChange={e => onChange(e)}
                            />
                            <TextField
                                id="phone"
                                placeholder="Enter your phone"
                                label="Phone"
                                variant="standard"
                                margin="normal"
                                fullWidth
                                defaultValue={data.phone}
                                onChange={e => onChange(e)}
                            />
                            <TextField
                                id="DOB"
                                placeholder="Enter your Date of Birth"
                                label="Date of Birth"
                                variant="standard"
                                margin="normal"
                                fullWidth
                                defaultValue={data.DOB}
                                onChange={e => onChange(e)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="outlined">Cancel</Button>
                            <Button onClick={(e) => onSubmit(e)} variant="contained">Confirm</Button>
                        </DialogActions>
                    </form>
                </Grid>
            </Dialog>
        </div >
    );
}