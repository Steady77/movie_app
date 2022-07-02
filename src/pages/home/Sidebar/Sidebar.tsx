import { Box } from '@mui/material';
import { FC } from 'react';
import Filters from './Filters/Filters';
import Pagination from './Pagination';

const Sidebar: FC = () => {
  return (
    <Box
      sx={{
        padding: '20px 18px',
        border: '1px solid #d9d9d9',
        boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
        borderRadius: '4px',
      }}
    >
      <Filters />
      <Pagination />
    </Box>
  );
};

export default Sidebar;
