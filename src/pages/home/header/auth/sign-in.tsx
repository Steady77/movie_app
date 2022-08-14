import { useTypedDispatch } from 'hooks/redux';
import { ChangeEvent, FC, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert, Button, TextField } from '@mui/material';
import { setAuthData } from 'redux/auth/authSlice';

interface SignInProps {
  handleClose: () => void;
}

const SignIn: FC<SignInProps> = ({ handleClose }) => {
  const dispatch = useTypedDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (email: string, password: string) => {
    const auth = getAuth();

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setAuthData({
          email: user.email,
          token: user.refreshToken,
          name: user.displayName,
        }),
      );
      handleClose();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePass = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignIn(email, password);
  };

  return (
    <form onSubmit={onSubmitForm}>
      {error && (
        <Alert
          sx={{ mb: '20px' }}
          severity="error"
        >
          {error}
        </Alert>
      )}
      <div>
        <TextField
          required
          label="Почта"
          type="email"
          variant="standard"
          fullWidth
          margin="dense"
          value={email}
          onChange={onChangeEmail}
        />
        <TextField
          required
          label="Пароль"
          type="password"
          autoComplete="current-password"
          variant="standard"
          fullWidth
          margin="dense"
          value={password}
          onChange={onChangePass}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '100%', mt: '30px' }}
        >
          Войти
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
