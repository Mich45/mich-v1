import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/themes';

export const Code = styled.code`
    border-radius: 4px;
`;

export const H2 = styled.h2`
    color: #3164f5;
`;

export const Pre = styled.pre`
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
`;

export const HeadingOne = styled.h1`
    color: ${colors.gray.darkGray};
    background: none;
    text-fill-color: ${colors.gray.darkGray};
    -webkit-text-fill-color: ${colors.gray.darkGray};
`;
