import React, {useState, useEffect} from 'react';
import SimpleTable from '../components/Table';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function App() {
  const [bookState, setBookState] = useState({
    initialBooks: [],
    searchedBooks: []
  });

  const fetchData = async (query) => {
    let {items} = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
        method: 'GET'
    }).then(response => response.json())
    setBookState({...bookState, searchedBooks : items});
  };

  useEffect(
    () => {

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ,[]);


  return (
    <>
    <AppBar position="static">
        <Toolbar style={{"margin":"0 auto"}}>
          <Typography variant="h6" noWrap>
            Saved
          </Typography>
        </Toolbar>
      </AppBar>
    <Container>
      <SimpleTable
        // TODO: add debouncer
      books={bookState.searchedBooks.length ? bookState.searchedBooks: bookState.initialBooks}>
      </SimpleTable>
    </Container>
    </>
  );
}