import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../Icons';
import Sidebar from '../Sidebar';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleCLick = (e) => {
        e.addEventListener('click', () => {
            setIsOpen(!isOpen);
        });
    };

    return (
        <>
            <MenuIcon onClick={handleCLick} />
            <CloseIcon />

            {isOpen ? <Sidebar /> : null}
        </>
    );
};

export default Dropdown;
