import { TextField } from '@mui/material';
import { ChangeEvent, FC, memo } from 'react';
import { PassInputProps } from 'types';

const PassInput: FC<PassInputProps> = ({ setPassword, password }) => {
  const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
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
  );
};

export default memo(PassInput);
