import { Box, Button, Modal, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { toggleModal } from 'redux/modal/modalSlice';
import { setAuthData } from 'redux/auth/authSlice';
import { useTypedDispatch, useTypedSelector } from 'hooks/redux';
import LoginForm from './login-form/login-form';
import { getFromStorage, removeFromStorage } from 'utils/helpers/storage';
import { selectAuth } from 'redux/auth/selectors';
import { selectIsModalOpen } from 'redux/modal/selectors';

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
  const dispatch = useTypedDispatch();
  const { isAuth, login } = useTypedSelector(selectAuth);
  const isModalOpen = useTypedSelector(selectIsModalOpen);

  useEffect(() => {
    const data = getFromStorage('auth');
    if (data) {
      const obj = {
        isAuth: data.isAuth,
        login: data.login,
      };
      dispatch(setAuthData(obj));
    }
  }, [dispatch]);

  const onClickLogout = () => {
    removeFromStorage('auth');
    dispatch(setAuthData({ isAuth: false, login: '' }));
  };

  const handleOpen = () => dispatch(toggleModal());
  const handleClose = () => dispatch(toggleModal());

  return (
    <>
      {isAuth ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <Typography
            component="span"
            sx={{ mr: '15px', lineHeight: 2.6, typography: { md: 'h6', sm: 'body1' } }}
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
            onClick={onClickLogout}
          >
            <Typography sx={{ typography: { md: 'h6', sm: 'body1' } }}>Выйти</Typography>
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
          <Typography sx={{ typography: { md: 'h6', sm: 'body1' } }}>Войти</Typography>
        </Button>
      )}
      <Modal
        open={isModalOpen}
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
