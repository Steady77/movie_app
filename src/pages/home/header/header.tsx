import { FC } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentQuestion, setPageNum } from 'redux/search/searchSlice';
import LoginModal from './login/login-modal';

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickSearch = () => {
    navigate('/search');
    dispatch(setCurrentQuestion(0));
    dispatch(setPageNum(1));
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ mb: '20px', p: '5px 0' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component={Link}
              to={'/'}
              sx={{
                textDecoration: 'none',
                color: '#fff',
                pr: '10px',
                typography: { md: 'h6', sm: 'body1' },
              }}
            >
              Главная
            </Typography>
            <Typography
              onClick={onClickSearch}
              sx={{
                textDecoration: 'none',
                color: '#fff',
                cursor: 'pointer',
                p: '0 10px',
                typography: { md: 'h6', sm: 'body1' },
              }}
            >
              Подобрать фильм
            </Typography>
          </Box>
          <LoginModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
