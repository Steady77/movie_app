import { StarOutline, StarOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';
import { setToFavorite } from 'redux/bookmarks/bookmarksSlice';
import { toggleModal } from 'redux/modal/modalSlice';
import { selectFavoriteList } from 'redux/bookmarks/selectors';
import { useTypedDispatch, useTypedSelector } from 'hooks/redux';
import { BookmarkButtonsProps } from 'types';
import { BOOKMARKS } from 'utils/consts';
import { toggleIdInArray } from 'utils/helpers/array';
import { saveToStorage } from 'utils/helpers/storage';
import { useAuth } from 'hooks/use-auth';

const FavoriteButton: FC<BookmarkButtonsProps> = ({ id }) => {
  const dispatch = useTypedDispatch();
  const { isAuth } = useAuth();
  const favoriteList = useTypedSelector(selectFavoriteList);

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
