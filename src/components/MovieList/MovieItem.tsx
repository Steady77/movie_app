import { BookmarkBorder, StarOutline } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/actions';
import { MoviItemProps } from 'types';

const MovieItem: FC<MoviItemProps> = ({
  poster_path,
  backdrop_path,
  vote_average,
  title,
  isAuth,
}) => {
  const imagePath = poster_path || backdrop_path;
  const dispatch = useDispatch();

  const onClickFavorite = () => {
    if (!isAuth) dispatch(toggleModal());
  };

  const onClickWatchLater = () => {
    if (!isAuth) dispatch(toggleModal());
  };

  return (
    <Grid
      item
      md={7.8}
      xs={16}
    >
      <Card
        sx={{
          boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
          height: '100%',
          border: '1px solid #d9d9d9',
          display: 'flex',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 190,
          }}
          height="100%"
          image={`https://image.tmdb.org/t/p/w500/${imagePath}`}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardHeader
            subheader={`Рейтинг: ${vote_average}`}
            action={
              <>
                <IconButton
                  onClick={onClickFavorite}
                  size="small"
                >
                  <StarOutline />
                </IconButton>
                <IconButton
                  onClick={onClickWatchLater}
                  size="small"
                >
                  <BookmarkBorder />
                </IconButton>
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

export default MovieItem;
