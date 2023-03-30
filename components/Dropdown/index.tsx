import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const Menu = styled.span`
    height: 3px;
    width: 20px;
    border-radius: 3px;
    position: relative;
    background: ${colors.gray.darkGray};
    margin-block: 2px;

    &:: before {
        content: '';
        position: absolute;
        left: 0;
        top: 5px;
        height: 3px;
        width: 20px;
        border-radius: 3px;
        background: ${colors.gray.darkGray};
    }

    &:: after {
        content: '';
        position: absolute;
        left: 0;
        top: -5px;
        height: 3px;
        width: 20px;
        border-radius: 3px;
        background: ${colors.gray.darkGray};
    }
`;

const XMenu = styled.span`
    height: 3px;
    width: 20px;
    border-radius: 3px;
    position: relative;
    background: ${colors.gray.darkGray};
    margin-block: 2px;
    position: absolute;
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transform-origin: center;
`;

const Anchor = styled.a`
    width: 50px;
    height: 40px;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;

    :hover {
        cursor: pointer;
    }

    .hidden {
        display: none;
    }

    .transform {
        transform: rotate(-45deg);
        opacity: 1;
    }

    .transform2 {
        transform: rotate(45deg);
        opacity: 1;
    }
`;

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = (): void => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    return (
        <>
            <Anchor onClick={handleClick} className="anchor">
                <XMenu className={isOpen ? 'transform2' : ''}></XMenu>
                <Menu className={isOpen ? 'hidden' : ''}></Menu>
                <XMenu className={isOpen ? 'transform' : ''}></XMenu>
            </Anchor>
            <Sidebar isOpen={isOpen} />
        </>
    );
};

export default Dropdown;
