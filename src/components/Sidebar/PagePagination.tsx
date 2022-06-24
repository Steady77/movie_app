import { Box, Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const PagePagination: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            fontSize: '16px',

            p: '5px 25px',
          }}
        >
          Назад
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            fontSize: '16px',

            p: '5px 25px',
          }}
        >
          Вперед
        </Button>
      </Box>
      <Typography
        align="center"
        mt="15px"
      >
        1 of 1455
      </Typography>
    </>
  );
};

export default PagePagination;
