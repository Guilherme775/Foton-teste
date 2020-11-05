import styled from 'styled-components';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { AiOutlineHeart } from 'react-icons/ai';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.2rem;
    align-items: center;

    @media screen and (min-width: 1024px) {
        padding: 0 1.2rem;
    }
`;

export const BackIcon = styled(AiOutlineArrowLeft)`
    cursor: pointer;
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #fffe7a;
    padding: 20px 0;

    @media screen and (max-width: 1024px) {
        height: 70vh;
    }
`;

export const ContentAlignContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: sans-serif;
        font-weight: bold;
        font-size: 42px;
        padding-bottom: 20px;

        @media screen and (max-width: 1024px) {
            font-size: 24px;
        }

        @media screen and (width: 1920px) {
            margin-top: 40px;
        }
    }

    p {
        font-family: sans-serif;
        font-size: 16px;
        padding: 10px 3px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`;

export const Bold = styled.p`
    font-weight: bold;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    padding: 20px;

    > a {
        width: 150px;
        height: 50px;
        border: 0;
        background: #34495e;
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.5s;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        text-decoration: none;

        &:hover {
            background: #2980b9;
        }
    }

    > a p {
        font-family: sans-serif;
    }
`;

export const HeartIcon = styled(AiOutlineHeart)`
    width: 25px;
    height: 25px;
    color: #fff;
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    height: 40%;
    text-align: center;

    > h1 {
        font-family: sans-serif;
        font-weight: bold;
        font-size: 42px;
        padding: 20px 0;

        @media screen and (max-width: 1024px) {
            font-size: 32px;
        }
    }

    > p {
        padding: 0 12rem;
        font-size: 32px;

        @media screen and (max-width: 1024px) {
            font-size: 16px;
            padding: 20px 10px;
        }
    }
`;