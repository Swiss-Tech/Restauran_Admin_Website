import React  , { useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import { MdClose } from 'react-icons/md';

export default function TransitionAlerts(props) {
  const [open, setOpen] =useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={props.open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <MdClose fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
         {props.message}
        </Alert>
      </Collapse>
      
    </Box>
  );
}
