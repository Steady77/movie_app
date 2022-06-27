import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import LoginForm from './LoginForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginModal: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          boxShadow: 'none',
          textTransform: 'capitalize',
          fontSize: '18px',
        }}
        color="success"
        variant="contained"
        onClick={handleOpen}
      >
        Войти
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <LoginForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
