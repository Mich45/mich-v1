import React, { useState } from 'react';
import styled from 'styled-components';
import { IconBulb } from '@tabler/icons';
import { IconBulbOff } from '@tabler/icons';
import { colors } from '../../styles/themes';

const Bulb = styled(IconBulb)`
    :hover {
        stroke: black;
        cursor: pointer;
    }
`;
const BulbOff = styled(IconBulbOff)`
    :hover {
        stroke: black;
        cursor: pointer;
    }
`;

const ThemeSwitch = () => {
    const [isToggle, setIsToggle] = useState(true);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    };

    return (
        <>
            {isToggle ? (
                <Bulb
                    size={30}
                    color={colors.gray.lightGray}
                    stroke={1.5}
                    strokeLinejoin="miter"
                    onClick={handleToggle}
                />
            ) : (
                <BulbOff
                    size={30}
                    color={colors.gray.lightGray}
                    stroke={1.5}
                    strokeLinejoin="miter"
                    onClick={handleToggle}
                />
            )}
        </>
    );
};

export default ThemeSwitch;
