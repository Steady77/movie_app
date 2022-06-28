import { Box, Button, Modal, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../../redux/auth/actions';
import { useTypedSelector } from '../../../redux/store';
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
  const dispatch = useDispatch();
  const { isAuth, login } = useTypedSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {isAuth ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ mr: '15px', lineHeight: 2.6 }}
          >
            {login}
          </Typography>
          <Button
            sx={{
              boxShadow: 'none',
              textTransform: 'capitalize',
              fontSize: '18px',
            }}
            color="success"
            variant="contained"
            onClick={() => dispatch(setAuthData(false, null))}
          >
            Выйти
          </Button>
        </Box>
      ) : (
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
      )}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <LoginForm handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
