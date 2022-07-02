import { BookmarkBorder, BookmarkOutlined, StarOutline, StarOutlined } from '@mui/icons-material';
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
import { useNavigate } from 'react-router-dom';
import { setToFavorite, setToWatchLater } from 'redux/bookmarks/actions';
import { toggleModal } from 'redux/modal/actions';
import { MoviItemProps } from 'types';
import { saveToStorage, toggleIdInArray } from 'utils/helpers';

const MovieItem: FC<MoviItemProps> = ({
  poster_path,
  backdrop_path,
  vote_average,
  title,
  isAuth,
  id,
  favoriteList,
  watchLaterList,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imagePath = poster_path || backdrop_path;

  const onClickFavorite = () => {
    if (!isAuth) dispatch(toggleModal());
    dispatch(setToFavorite(id));
    saveToStorage('favorites', toggleIdInArray(favoriteList, id));
  };

  const onClickWatchLater = () => {
    if (!isAuth) dispatch(toggleModal());
    dispatch(setToWatchLater(id));
    saveToStorage('watchLater', toggleIdInArray(watchLaterList, id));
  };

  const onClickButton = () => {
    navigate(`movie/${id}`);
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
                <IconButton
                  onClick={onClickFavorite}
                  size="small"
                >
                  {favoriteList.includes(id) ? <StarOutlined /> : <StarOutline />}
                </IconButton>
                <IconButton
                  onClick={onClickWatchLater}
                  size="small"
                >
                  {watchLaterList.includes(id) ? <BookmarkOutlined /> : <BookmarkBorder />}
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

export default MovieItem;
