import { StarOutline, StarOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { setToFavorite } from 'redux/bookmarks/actions';
import { toggleModal } from 'redux/modal/actions';
import { selectBookmarks } from 'redux/bookmarks/selectors';
import { useTypedSelector } from 'redux/store';
import { BookmarkButtonsProps } from 'types';
import { BOOKMARKS } from 'utils/consts';
import { toggleIdInArray } from 'utils/helpers/array';
import { saveToStorage } from 'utils/helpers/storage';

const FavoriteButton: FC<BookmarkButtonsProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { isAuth } = useTypedSelector(selectAuth);
  const { favoriteList } = useTypedSelector(selectBookmarks);

  const onClickFavorite = () => {
    if (!isAuth) {
      dispatch(toggleModal());
    } else {
      dispatch(setToFavorite(id));
      saveToStorage(BOOKMARKS.FAVORITES, toggleIdInArray(favoriteList, id));
    }
  };
  return (
    <IconButton
      onClick={onClickFavorite}
      size="small"
    >
      {favoriteList.includes(id) ? <StarOutlined /> : <StarOutline />}
    </IconButton>
  );
};
export default FavoriteButton;
