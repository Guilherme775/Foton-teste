import React, {useState} from 'react';

import { useHistory } from 'react-router-dom';

import { 
   Container,
   Header,
   BackIcon,
   ContentContainer,
   ContentAlignContainer,
   TextContainer,
   ButtonsContainer,
   HeartIcon,
   Bold,
   DescriptionContainer
} from './styles';

import Button from '../../components/Button';

function Book() {
  const title = localStorage.getItem("title");
  const description = localStorage.getItem("description");
  const publisher = localStorage.getItem("publisher");
  const publishedDate = localStorage.getItem("publishedDate");
  const link = localStorage.getItem("link");

  const [propsButton, setPropsButton] = useState(false);

  const history = useHistory();

  return (
    <Container>
      <ContentContainer>
        <Header>
          <BackIcon onClick={() => {history.push("/books")}} />
          <h1>Books</h1>
        </Header>
        <ContentAlignContainer>
          <h1>{title}</h1>
          <TextContainer>
            <p>ediora: </p>
            <Bold>{publisher}</Bold>
          </TextContainer>
          <TextContainer>
            <p>publicado em: </p>
            <Bold>{publishedDate}</Bold>
          </TextContainer>
          <ButtonsContainer>
            <a href={link} target="_blank" rel="noreferrer"><p>buy</p></a>
            <Button favorite={propsButton} onClick={() => {setPropsButton(true)}}><HeartIcon /></Button>
          </ButtonsContainer>
        </ContentAlignContainer>
      </ContentContainer>
      <DescriptionContainer>
        <h1>Descrição</h1>
        <p>
          {description}
        </p>
      </DescriptionContainer>
    </Container>
  );
}

export default Book;