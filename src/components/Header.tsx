import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

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
          <Button
            sx={{
              boxShadow: 'none',
              textTransform: 'capitalize',
              fontSize: '18px',
            }}
            color="success"
            variant="contained"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
