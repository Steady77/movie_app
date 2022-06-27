import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import LoginModal from './Login/LoginModal';

const Header: FC = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ mb: '20px' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Home
          </Typography>
          <LoginModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
