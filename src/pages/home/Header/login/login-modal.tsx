import { Box, Button, Modal, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/actions';
import { setAuthData } from 'redux/auth/actions';
import { useTypedSelector } from 'redux/store';
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
  const dispatch = useDispatch();
  const { isAuth, login } = useTypedSelector(selectAuth);
  const isModalOpen = useTypedSelector(selectIsModalOpen);

  useEffect(() => {
    const data = getFromStorage('auth');
    if (data) {
      dispatch(setAuthData(data.isAuth, data.login));
    }
  }, []);

  const onClickLogout = () => {
    removeFromStorage('auth');
    dispatch(setAuthData(false, null));
  };

  const handleOpen = () => dispatch(toggleModal());
  const handleClose = () => dispatch(toggleModal());

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
            onClick={onClickLogout}
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
