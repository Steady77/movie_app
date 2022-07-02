import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './Login/LoginModal';

const Header: FC = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ mb: '20px' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={Link}
            to={'/'}
            sx={{ textDecoration: 'none', color: '#fff' }}
          >
            Главная
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to={'/search'}
            sx={{ textDecoration: 'none', color: '#fff' }}
          >
            Подобрать фильм
          </Typography>
          <LoginModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
