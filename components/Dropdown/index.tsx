import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../Icons';
import Sidebar from '../Sidebar';
import styled from 'styled-components';

const Menu = styled.span`
    height: 3px;
    width: 20px;
    position: relative;
    background: gray;
    margin-block: 2px;

    &:: before {
        content: '';
        position: absolute;
        left: 0;
        top: 5px;
        height: 3px;
        width: 20px;
        background: gray;
    }

    &:: after {
        content: '';
        position: absolute;
        left: 0;
        top: -5px;
        height: 3px;
        width: 20px;
        background: gray;
    }
`;

const XMenu = styled.span`
    height: 3px;
    width: 20px;
    border-radius: 3px;
    position: relative;
    background: gray;
    margin-block: 2px;
    position: absolute;
    transition: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transfrom-origin: center;
`;

const Anchor = styled.a`
    width: 50px;
    height: 40px;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;

    .hidden {
        display: none;
    }

    .transform {
        transform: rotate(45deg);
    }

    .transform2 {
        transform: rotate(-45deg);
    }
`;

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCLick = (e): void => {
        e.addEventListener('click', () => {});
    };

    useEffect(() => {
        const anchor = document.querySelector('.anchor');
        const span = document.querySelector('.span');
        const span1 = document.querySelector('.span1');
        const span2 = document.querySelector('.span2');
        anchor.addEventListener('click', () => {
            if (!isOpen) {
                setIsOpen(true);
                span.classList.add('hidden');
                span1.classList.add('transform');
                span2.classList.add('transform2');
            } else {
                setIsOpen(false);
                span.classList.remove('hidden');
                span1.classList.remove('transform');
                span2.classList.remove('transform2');
            }
        });
    });

    return (
        <>
            <Anchor className="anchor">
                <XMenu className="span1"></XMenu>
                <Menu className="span"></Menu>
                <XMenu className="span2"></XMenu>
            </Anchor>
            {isOpen ? <Sidebar /> : null}
        </>
    );
};

export default Dropdown;
