import { FormControl, MenuItem, Box, Select, SelectChangeEvent, InputLabel } from '@mui/material';
import { FC } from 'react';
import { setCurrentBookmark } from 'redux/bookmarks/bookmarksSlice';
import { selectCurrentBookmark } from 'redux/bookmarks/selectors';
import { setCurrentPage } from 'redux/movies/moviesSlice';
import { useTypedDispatch, useTypedSelector } from 'hooks/redux';
import { BOOKMARKS } from 'utils/consts';
import { useAuth } from 'hooks/use-auth';

const BookmarksSelect: FC = () => {
  const currentBookmark = useTypedSelector(selectCurrentBookmark);
  const { isAuth } = useAuth();
  const dispatch = useTypedDispatch();

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setCurrentBookmark(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      {isAuth && (
        <Box sx={{ minWidth: 120, mb: '15px' }}>
          <FormControl
            fullWidth
            size="small"
          >
            <InputLabel>Закладки:</InputLabel>
            <Select
              value={currentBookmark}
              label="Закладки:"
              onChange={handleChange}
            >
              <MenuItem value="">К списку</MenuItem>
              <MenuItem value={BOOKMARKS.FAVORITES}>Избранные</MenuItem>
              <MenuItem value={BOOKMARKS.WATCH_LATER}>Смотреть позже</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}
    </>
  );
};

export default BookmarksSelect;
