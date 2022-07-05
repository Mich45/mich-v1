import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../Icons';
import Sidebar from '../Sidebar';
import styled from 'styled-components';

const Menu = styled.span`
height: 2px;
width: 16px;
position: relative: 
background: red;


&:: before {
    position: absolute;
    content: '';
    left: 0;
    top: -5px;
    transition: top, transform;
    transition-duration: .1s;
    transition-timing-function: ease-in-out;
    top: 0;
    transform: rotate(-45deg);
}

&:: after {
    position: absolute;
    content: '';
    left: 0;
    top: 5px;
    transition: top, transform;
    transition-duration: .1s;
    transition-timing-function: ease-in-out;
    top: 0;
    transform: rotate(45deg);
}

`;

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleCLick = (e): void => {
        e.addEventListener('click', () => {
            setIsOpen(!isOpen);
        });
    };

    return (
        <>
            <MenuIcon onClick={handleCLick} />
            <CloseIcon onClick={handleCLick} />

            {isOpen ? <Sidebar /> : null}
        </>
    );
};

export default Dropdown;
