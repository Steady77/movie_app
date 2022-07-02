import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { InfoTableProps } from 'types';
import { genresData } from 'data/genresData';

const InfoTable: FC<InfoTableProps> = ({ movieData }) => {
  const { original_language, original_title, popularity, release_date, vote_count, genre_ids } =
    movieData[0];

  const genres = genresData
    .filter((item) => genre_ids.includes(item.id))
    .map((item) => item.name)
    .join(', ');

  return (
    <TableContainer component={Paper}>
      <Typography
        variant="body1"
        sx={{ p: '10px 16px' }}
      >
        Детали
      </Typography>
      <Divider sx={{ borderBottomWidth: 'medium' }} />
      <Table
        sx={{ minWidth: 650 }}
        size="small"
      >
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: '250px', fontWeight: '600' }}
            >
              Дата выхода
            </TableCell>
            <TableCell align="left">{release_date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: '250px', fontWeight: '600' }}
            >
              Популярность
            </TableCell>
            <TableCell align="left">{popularity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: '250px', fontWeight: '600' }}
            >
              Количество оценок
            </TableCell>
            <TableCell align="left">{vote_count}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: '250px', fontWeight: '600' }}
            >
              Язык оригинала
            </TableCell>
            <TableCell align="left">{original_language}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: '250px', fontWeight: '600' }}
            >
              Жанр
            </TableCell>
            <TableCell align="left">{genres}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: '250px', fontWeight: '600' }}
            >
              Оригинальное название
            </TableCell>
            <TableCell align="left">{original_title}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InfoTable;
