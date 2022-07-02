import { Box, Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useTypedSelector } from 'redux/store';
import { genresData } from 'data/genresData';
import { filterByGenre } from 'utils/helpers';



const SearchPage: FC = () => {
  const { items, genresIds } = useTypedSelector((state) => state.movies);
  const [current, setCurrent] = useState(0)

  const onClickButton = () => {
    filterByGenre(items, genresIds);
    setCurrent(current + 1)
  };

  return (
    <Box>
      <Typography
        sx={{ mb: '30px', fontWeight: 500 }}
        variant="h4"
        align="center"
      >
        Выберите жанр
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {genresData.map((item) => (
          <Button
            onClick={onClickButton}
            sx={{ flex: '0 32%', mb: '20px' }}
            variant="outlined"
          >
            {item.name}
          </Button>
        ))}
      </Box>
      {
        array[current]
      }
    </Box>
  );
};

export default SearchPage;

const First = () => {
  return <div>First</div>;
};

const Second = () => {
  return(<div>second</div>);
};

const array = [<First />, <Second />]
