import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoviItemProps } from 'types';
import FavoriteButton from './favorite-button';
import WatchLaterButton from './watch-later-button';

const MovieItem: FC<MoviItemProps> = ({ poster_path, backdrop_path, vote_average, title, id }) => {
  const navigate = useNavigate();
  const imagePath = poster_path || backdrop_path;
  const matches = useMediaQuery('(max-width:600px)');

  const onClickButton = () => {
    navigate(`movie/${id}`);
  };

  return (
    <Grid
      item
      lg={7.8}
      sm={16}
      sx={{ flexBasis: '100%' }}
    >
      <Card
        sx={{
          boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
          height: '100%',
          border: '1px solid #d9d9d9',
          display: 'flex',
          m: '0 auto',
          flexDirection: matches ? 'column' : 'row',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxWidth: 190,
          }}
          image={`https://image.tmdb.org/t/p/w500/${imagePath}`}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            boxSizing: 'border-box',
          }}
        >
          <CardHeader
            subheader={`Рейтинг: ${vote_average}`}
            action={
              <>
                <FavoriteButton id={id} />
                <WatchLaterButton id={id} />
              </>
            }
          />
          <Typography
            variant="body1"
            sx={{ flex: '1 0 auto', fontWeight: 500 }}
            p={'16px'}
          >
            {title}
          </Typography>
          <Divider />
          <CardActions>
            <Button
              onClick={onClickButton}
              sx={{
                textTransform: 'none',
                fontSize: '16px',
                color: '#000',
                fontWeight: 400,
                pl: '16px',
              }}
              variant="text"
              size="small"
              color="primary"
            >
              Подробнее
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default memo(MovieItem);
