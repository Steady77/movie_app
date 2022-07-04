import { TextField } from '@mui/material';
import { ChangeEvent, FC, memo } from 'react';
import { LoginInputProps } from 'types';

const LoginInput: FC<LoginInputProps> = ({ setLogin, login }) => {
  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  return (
    <TextField
      required
      label="Имя"
      variant="standard"
      fullWidth
      margin="dense"
      value={login}
      onChange={onChangeLogin}
    />
  );
};

export default memo(LoginInput);
