import { BookmarkBorder, BookmarkOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';
import { setToWatchLater } from 'redux/bookmarks/bookmarksSlice';
import { toggleModal } from 'redux/modal/modalSlice';
import { selectWatchLaterList } from 'redux/bookmarks/selectors';
import { useTypedDispatch, useTypedSelector } from 'hooks/redux';
import { BookmarkButtonsProps } from 'types';
import { BOOKMARKS } from 'utils/consts';
import { toggleIdInArray } from 'utils/helpers/array';
import { saveToStorage } from 'utils/helpers/storage';
import { useAuth } from 'hooks/use-auth';

const WatchLaterButton: FC<BookmarkButtonsProps> = ({ id }) => {
  const dispatch = useTypedDispatch();
  const { isAuth } = useAuth();
  const watchLaterList = useTypedSelector(selectWatchLaterList);

  const onClickWatchLater = () => {
    if (!isAuth) {
      dispatch(toggleModal());
    } else {
      dispatch(setToWatchLater(id));
      saveToStorage(BOOKMARKS.WATCH_LATER, toggleIdInArray(watchLaterList, id));
    }
  };
  return (
    <IconButton
      onClick={onClickWatchLater}
      size="small"
    >
      {watchLaterList.includes(id) ? <BookmarkOutlined /> : <BookmarkBorder />}
    </IconButton>
  );
};

export default WatchLaterButton;
