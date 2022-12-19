import * as React from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
//@ts-ignore
import { useUserAuth } from "./UserAuthContext";

type MyProps = {
    status : {
        severity: AlertColor | undefined;
        message: string;
    }
};

// TODO: separate React UI component from the service class.
export function InitialisationStatus({ status }: MyProps) {
    const [open, setOpen] = useState(true);
    return (
        status.severity && status.message && <Collapse in={open}>
            <Alert
                severity={status.severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}>
                        ❌
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {status.message}
            </Alert>
        </Collapse>
    );
}