import {
  Box,
  Button,
  IconButton,
  Popover,
  Snackbar,
  Typography,
} from '@mui/material';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

// eslint-disable-next-line react/prop-types
const Banking = ({ bankName, accountNumber, accountOwner, icon }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = (text) => {
    setOpen(true);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Text copied to clipboard:', text);
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard:', error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setOpen(false);
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        XÓA
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <Box>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{
              borderRadius: '36px',
              width: '100%',
              backgroundColor: 'primary.mainBtn',
              marginBottom: 2,
              height: '45px',
            }}
            startIcon={icon}
          >
            <Typography sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              {bankName}
            </Typography>
          </Button>
          <Popover
            sx={{
              '.MuiPaper-root': {
                width: '320px',
                backgroundColor: 'primary.secondaryBtn',
              },
            }}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box>
              <Button
                onClick={() => handleClick(accountNumber)}
                sx={{ width: '100%', color: 'primary.color' }}
              >
                STK: {accountNumber}
              </Button>
              <Button
                sx={{ width: '100%', color: 'primary.color' }}
                onClick={() => handleClick(accountOwner)}
              >
                {accountOwner}
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Copy thành công!"
                action={action}
              />
            </Box>
          </Popover>
        </Box>
      )}
    </PopupState>
  );
};

export default Banking;
