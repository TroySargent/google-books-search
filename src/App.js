import React, {useState} from 'react';
import SimpleTable from './components/Table'
import Container from '@material-ui/core/Container';
import Search from './components/Search'

export default function App() {
  const [bookState, setBookState] = useState({
    initialBooks: [],
    searchedBooks: []
})

  const fetchData = async (query) => {
    let {items} = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
        method: 'GET'
    }).then(response => response.json())
    console.log(items)
    setBookState({...bookState, searchedBooks : items});
  } 
  
  const searchForBook = e => {
    setBookState({...bookState, searchedBooks : []}); //reset the search results on each change (need to work for backspacing)
    let searchValue = e.target.value.toLowerCase();
    if (searchValue !== "" || undefined) {
      fetchData(searchValue);
    }

  };

  return (
    <>
    <Search searchForBook={searchForBook}/>
    <Container>
      <SimpleTable
        // TODO: add debouncer
      books={bookState.searchedBooks.length ? bookState.searchedBooks: bookState.initialBooks}>
      </SimpleTable>
    </Container>
    </>
  );
}

