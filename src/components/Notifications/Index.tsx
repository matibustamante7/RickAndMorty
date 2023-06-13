import React from 'react';
import { Alert, Snackbar, AlertColor, Typography } from "@mui/material"

type NotificationProps = {
    open: boolean,
    msg: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

export const Notification: React.FC<NotificationProps> = ({
    open,
    msg,
    severity,
    handleClose,
}) => {

    return (
        <Snackbar 
        anchorOrigin={{vertical:'top', horizontal:'center'}} 
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={severity}>
                <Typography>{msg}</Typography>
            </Alert>
        </Snackbar>
    )
}