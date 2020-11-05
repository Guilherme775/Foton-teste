import React, {useState} from 'react';

import { useHistory } from 'react-router-dom';

import { 
   Container,
   Header,
   BackIcon,
   ContentContainer,
   ContentBody,
   ContentText,
   ContentImage,
   ContentAlignContainer,
   TextContainer,
   ButtonsContainer,
   HeartIcon,
   Bold,
   DescriptionContainer
} from './styles';

import Button from '../../components/Button';

import Star from '../../components/Star';

function Book() {
  const image = localStorage.getItem("image");
  const title = localStorage.getItem("title");
  const description = localStorage.getItem("description");
  const authors = localStorage.getItem("authors");
  const pageCount = localStorage.getItem("pageCount");
  const link = localStorage.getItem("link");

  const [propsButton, setPropsButton] = useState(false);
  const [like, setLike] = useState(false);

  const history = useHistory();

  if (image) {
    return (
      <Container>
        <ContentContainer>
          <Header>
            <BackIcon onClick={() => {history.push("/books")}} />
            <h1>Books</h1>
          </Header>
          <ContentBody>
            <ContentImage>
              <img src={image} alt="book"/>
              <p>{pageCount} pages</p>
            </ContentImage>
            <ContentText>
              <ContentAlignContainer>
                <h1>{title}</h1>
                <TextContainer>
                  <p>by: </p>
                  <Bold>{authors}</Bold>
                </TextContainer>
                <TextContainer>
                  <Star like={like} onClick={() => {like ? setLike(false) : setLike(true)}} />
                </TextContainer>
                <ButtonsContainer>
                  <a href={link} target="_blank" rel="noreferrer"><p>buy</p></a>
                  <Button favorite={propsButton} onClick={() => {propsButton ? setPropsButton(false) : setPropsButton(true)}}><HeartIcon /></Button>
                </ButtonsContainer>
              </ContentAlignContainer>
            </ContentText>
          </ContentBody>
        </ContentContainer>
        <DescriptionContainer>
          <h1>Descrição</h1>
          <p>
            {description}
          </p>
        </DescriptionContainer>
      </Container>
    );
  } else {
    return (
      <h1>Page Not Found</h1>
    )
  }
}

export default Book;