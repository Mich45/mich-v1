import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/themes';

export const Code = styled.code`
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
`;

export const H2 = styled.h2`
    color:${colors.green.textGreen}
`;

export const Pre = styled.pre`
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
`;

export const HeadingThree = styled.h3`
 color: ${colors.gray.grayPrimary}
`;
