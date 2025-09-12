import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { colors } from '../../styles/themes';

export const Code = styled.code`
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
`;

export const H2 = styled.h2`
    color: #4a5568;
`;

export const Pre = styled.pre`
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
`;

export const HeadingThree = styled.h3`
 color: ${colors.gray.lightGray}
`;


export const PostImage = styled(Image)`
object-fit: contain;
position: relative;
width: fill-available;
width: -webkit-fill-available;
height: fill-available;
height: -webkit-fill-available;
`

