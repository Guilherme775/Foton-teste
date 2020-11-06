import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Header, SearchIcon, CardContainer, Card, ButtonContainer } from './styles';

import axios from 'axios';

function Books() {
  const [query, setQuery] = useState('book');
  const [books, setBooks] = useState([]);
  const [index, setIndex] = useState(10);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=book&filter=partial&startIndex=0`)
    .then((response) => {
      setBooks(response.data.items);
      setTotal(response.data.totalItems);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&filter=partial&startIndex=0`)
      .then((response) => {
        setBooks(response.data.items);
        setTotal(response.data.totalItems);
        setIndex(10);
      });
    } catch (err) {
      alert('nenhum livro foi encontrado com estes parâmetros')
    }
  }

  async function handleMore() {
    try {
      const totalIndex = Math.ceil(total / 10);

      if (index > totalIndex ) {
        alert("máximo de livros encontrados");
      } else {
        setIndex(index + 10);

        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&filter=partial&startIndex=${index}`)
        .then((response) => {
          setBooks([...books, ...response.data.items]);
        });
      }
    } catch (err) {
      alert('nenhum livro foi encontrado com estes parâmetros')
    }
  }

  function handleSaveItems(image, title, description, authors, pageCount, link) {
    localStorage.setItem("image", image);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("authors", authors);
    localStorage.setItem("pageCount", pageCount);
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
                handleSaveItems(item.volumeInfo.imageLinks.thumbnail,
                item.volumeInfo.title,
                item.volumeInfo.description,
                item.volumeInfo.authors,
                item.volumeInfo.pageCount,
                item.saleInfo.buyLink
                )
              }}>
                <img src={item.volumeInfo.imageLinks.thumbnail} alt="thumbnail"/>
              </li>
            </ul>
          </Card>
        ))}
      </CardContainer>
      <ButtonContainer>
        <button onClick={handleMore}>Ver mais</button>
      </ButtonContainer>
    </Container>
  );
}

export default Books;
