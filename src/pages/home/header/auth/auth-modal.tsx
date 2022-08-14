import { Box, Button, Modal, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { toggleModal } from 'redux/modal/modalSlice';
import { removeAuthData } from 'redux/auth/authSlice';
import { useTypedDispatch, useTypedSelector } from 'hooks/redux';
import { selectIsModalOpen } from 'redux/modal/selectors';
import SignIn from './sign-in';
import { useAuth } from 'hooks/use-auth';
import SignUp from './sign-up';
import { getAuth, signOut } from 'firebase/auth';

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

const buttonStyle = {
  boxShadow: 'none',
  textTransform: 'capitalize',
  fontSize: '18px',
};

const AuthModal: FC = () => {
  const dispatch = useTypedDispatch();
  const { name, isAuth } = useAuth();
  const isModalOpen = useTypedSelector(selectIsModalOpen);
  const [isRegForm, setIsRegForm] = useState(false);
  const auth = getAuth();

  const onClickLogout = () => {
    signOut(auth);
    dispatch(removeAuthData());
  };

  const handleSignUpButton = () => {
    handleOpen();
    setIsRegForm(true);
  };

  const handleSignInButton = () => {
    handleOpen();
    setIsRegForm(false);
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
            {name}
          </Typography>
          <Button
            sx={buttonStyle}
            color="success"
            variant="contained"
            onClick={onClickLogout}
          >
            <Typography sx={{ typography: { md: 'h6', sm: 'body1' } }}>Выйти</Typography>
          </Button>
        </Box>
      ) : (
        <Box>
          <Button
            sx={buttonStyle}
            color="success"
            variant="contained"
            onClick={handleSignInButton}
          >
            <Typography sx={{ typography: { md: 'h6', sm: 'body1' } }}>Войти</Typography>
          </Button>
          <Button
            sx={{
              ...buttonStyle,
              ml: '10px',
            }}
            color="success"
            variant="contained"
            onClick={handleSignUpButton}
          >
            <Typography sx={{ typography: { md: 'h6', sm: 'body1' } }}>Регистрация</Typography>
          </Button>
        </Box>
      )}
      <Modal
        open={isModalOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          {isRegForm ? <SignUp handleClose={handleClose} /> : <SignIn handleClose={handleClose} />}
        </Box>
      </Modal>
    </>
  );
};

export default AuthModal;
