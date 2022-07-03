import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentQuestion, setPageNum } from 'redux/search/actions';
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
            onClick={onClickSearch}
            variant="h6"
            sx={{ textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
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
