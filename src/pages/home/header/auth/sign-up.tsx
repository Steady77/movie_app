import { Alert, Button, TextField } from '@mui/material';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { useTypedDispatch } from 'hooks/redux';
import { ChangeEvent, FC, useState } from 'react';
import { setAuthData } from 'redux/auth/authSlice';

interface SignUpProps {
  handleClose: () => void;
}

const SignUp: FC<SignUpProps> = ({ handleClose }) => {
  const dispatch = useTypedDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (email: string, password: string, name: string) => {
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, {
        displayName: name,
      });
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
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignUp(email, password, name);
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
          label="Имя"
          type="text"
          variant="standard"
          fullWidth
          margin="dense"
          value={name}
          onChange={onChangeName}
        />
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
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
