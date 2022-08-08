import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    width: 350px;
    height: 40px;
    border: 2px solid #b7b7b7;
    outline: none;
    background-color: transparent;
    color: black;
    border-radius: 4px;
    padding-inline: 10px;
    transition: 0.1s ease-out;

    :focus {
        box-shadow: 0 4px #e86262;
        border-color: #e86262;
    }
`;

const Search = () => {
    return <SearchInput placeholder=" 🔍 Search posts " />;
};

export default Search;
