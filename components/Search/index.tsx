import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const SearchInput = styled.input`
    width: 80%;
    height: 40px;
    border: 2px solid ${colors.gray.darkGray};
    outline: none;
    background-color: transparent;
    color: black;
    border-radius: 4px;
    padding-inline: 10px;
    transition: 0.1s ease-out;

    @media ${device.laptop} {
        width: 350px;
    }

    :focus {
        box-shadow: 0 4px ${colors.green.greenPrimary};
        border-color: ${colors.green.greenPrimary};
    }
`;

const Search = () => {
    return <SearchInput placeholder=" 🔍 Search posts " />;
};

export default Search;
