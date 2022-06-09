import React from 'react';
import styled from 'styled-components';
import { IconAward } from '@tabler/icons';

const ThemeSwitch = () => {
    return (
        <>
            <IconAward
                size={36} // set custom `width` and `height`
                color="red" // set `stroke` color
                stroke={3} // set `stroke-width`
                strokeLinejoin="miter" // override other SVG props
            />
        </>
    );
};

export default ThemeSwitch;
