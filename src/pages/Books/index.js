import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Header, SearchIcon, CardContainer, Card, ButtonContainer } from './styles';

import axios from 'axios';

function Books() {
  const [query, setQuery] = useState('book');
  const [books, setBooks] = useState([]);
  const [results, setResults] = useState(6);
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=book&maxResults=${results}`)
    .then((response) => {
      setBooks(response.data.items);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${results}`)
      .then((response) => {
        setBooks(response.data.items);
      });
    } catch (err) {
      alert('nenhum livro foi encontrado com estes parâmetros')
    }
  }

  function handleMore() {
    setResults(results + 6);

    try {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${results}`)
      .then((response) => {
        setBooks(response.data.items);
      });
    } catch (err) {
      alert('nenhum livro foi encontrado com estes parâmetros')
    }
  }

  function handleSaveItems(title, description, publisher, publishedDate, link) {
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("publisher", publisher);
    localStorage.setItem("publishedDate", publishedDate);
    localStorage.setItem("link", link);

    history.push('/book');
  }

  return (
    <Container>
      <Header>
        <h1>Books</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Digite o nome do livro" 
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button type="submit"><SearchIcon /></button>
        </form>
      </Header>
      <CardContainer>
        {books.map((item) => (
          <Card key={item.id}>
            <ul>
              <li onClick={() => {
                handleSaveItems(item.volumeInfo.title,
                item.volumeInfo.description,
                item.volumeInfo.publisher,
                item.volumeInfo.publishedDate,
                item.saleInfo.buyLink
                )
              }}>
                <h1>{item.volumeInfo.title}</h1>
                <p>{item.volumeInfo.publisher}</p>
                <p>{item.volumeInfo.publishedDate}</p>
              </li>
            </ul>
          </Card>
        ))}
      </CardContainer>
      <ButtonContainer>
        <button onClick={handleMore}>Lead More</button>
      </ButtonContainer>
    </Container>
  );
}

export default Books;