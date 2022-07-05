import { Button } from '@mui/material';
import { FC, memo } from 'react';

const LoginButton: FC = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{ width: '100%', mt: '30px' }}
    >
      Войти
    </Button>
  );
};

export default memo(LoginButton);
