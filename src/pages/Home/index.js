import React from 'react';

import { Link } from 'react-router-dom';

import { Container, TextContainer, ImageContainer, ButtonText } from './styles';

import LandingImage from '../../assets/landing-image.svg';

function Home() {
  return (
    <Container>
      <TextContainer>
        <h1>Books</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatum alias laborum error laboriosam officia sint impedit commodi omnis</p>
        <Link to="/books">
          <ButtonText>Ver Livros</ButtonText>
        </Link>
      </TextContainer>
      <ImageContainer>
        <img src={LandingImage} alt="landing"/>
      </ImageContainer>
    </Container>
  );
}

export default Home;