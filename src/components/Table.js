import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {

    const classes = useStyles();

  return (

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center"> Authors</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.books.length > 0 ? 
          props.books.map((book, index) => {
            return (
              <TableRow key={index}>
              <TableCell component="th" scope="row" align="center">{book.volumeInfo.title}</TableCell>
              <TableCell align="center">{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No author listed"}</TableCell>
              <TableCell align="center">{book.volumeInfo.description}</TableCell>
              <TableCell align="center"><img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/></TableCell>
              <TableCell align="center"><a target="blank_" href={book.volumeInfo.previewLink}>Preview</a></TableCell>
              </TableRow>
              )
            }) :  <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            </TableRow>
            
          }
        </TableBody>
      </Table>
    </TableContainer>

  );
}
