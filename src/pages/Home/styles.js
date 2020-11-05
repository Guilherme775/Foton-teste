import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #fffe7a;
`;

export const TextContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10%;

    > h1 {
        font-family: sans-serif;
        font-weight: bold;
        font-size: 3.5rem;
        margin: 10px;
    }

    > p {
        font-family: sans-serif;
        font-size: 1.2rem;
        margin: 10px;
    }

    > a {
        width: 250px;
        height: 70px;
        border: none;
        text-decoration: none;
        cursor: pointer;
        background: #3b444b;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px;

        &:hover {
            opacity: 0.9;
        }

        @media (max-width: 700px) {
            width: 18rem;
            margin: 20px;
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

export const ButtonText = styled.p`
    font-family: sans-serif;
    color: #fff;
`;

export const ImageContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;