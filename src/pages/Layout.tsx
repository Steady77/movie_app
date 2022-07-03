import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './home/header/header';

const Layout = () => {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
