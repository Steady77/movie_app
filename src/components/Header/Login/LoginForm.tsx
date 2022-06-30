import { Button, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveToStorage } from 'utils/helpers';
import { setAuthData } from '../../../redux/auth/actions';
import { LoginFormProps } from '../../../types';

const LoginForm: FC<LoginFormProps> = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (login === 'user' && password === '123') {
      saveToStorage('auth', { isAuth: true, login });
      dispatch(setAuthData(true, login));
      handleClose();
    } else {
      alert('Не верные логин или пароль!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        label="Имя"
        variant="standard"
        fullWidth
        margin="dense"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: '100%', mt: '30px' }}
      >
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
