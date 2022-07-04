import { FormControl, MenuItem, Box, Select, SelectChangeEvent, InputLabel } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentBookmark } from 'redux/bookmarks/actions';
import { useTypedSelector } from 'redux/store';
import { BOOKMARKS } from 'utils/consts';

const BookmarksSelect: FC = () => {
  const currentBookmark = useTypedSelector((state) => state.bookmarks.currentBookmark);
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setCurrentBookmark(e.target.value));
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
