import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthData } from 'redux/auth/authSlice';
import { LoginFormProps } from 'types';
import { saveToStorage } from 'utils/helpers/storage';
import LoginButton from './login-button';
import LoginInput from './login-input';
import PassInput from './pass-input';

const LoginForm: FC<LoginFormProps> = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (login === 'user' && password === '123') {
      saveToStorage('auth', { isAuth: true, login });
      dispatch(setAuthData({ isAuth: true, login }));
      handleClose();
    } else {
      alert('Не верные логин или пароль!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LoginInput
        setLogin={setLogin}
        login={login}
      />
      <PassInput
        setPassword={setPassword}
        password={password}
      />
      <LoginButton />
    </form>
  );
};

export default LoginForm;
