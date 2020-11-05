import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: #fffe7a;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    > h1 {
        font-family: sans-serif;
        font-weight: bold;
        padding-right: 10px;
    }

    > form input {
        width: 80%;
        height: 2rem;
        border-radius: 0.8rem;
        background: #fff;
        border: 1px solid #333;
        outline: 0;
        padding: 0 0.8rem;
        font-family: sans-serif;
    }

    > form button {
        width: 2rem;
        height: 2rem;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        margin: 0 auto;
        border: 1px solid #333;
        text-decoration: none;

        &:hover {
            opacity: 0.8;
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 20px 10px;
    }
`;

export const SearchIcon = styled(AiOutlineSearch)``;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const Card = styled.div`
    padding: 20px;
    margin: 20px auto;

    > ul li {
        list-style: none;
        width: 200px;
        height: 300px;
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        cursor: pointer;
        padding: 0 20px;

        > h1 {
            font-size: 16px;
            font-family: sans-serif;
            font-weight: bold;
            margin-bottom: 10px;
        }

        > p {
            font-family: sans-serif;
            margin: 10px 0;
        }
    }

    > ul li p {
        font-family: sans-serif;
        color: #333;
        align-self: center;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 20px 0;

    > button {
        width: 150px;
        height: 50px;
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
`;
