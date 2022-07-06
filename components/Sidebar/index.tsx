import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 200px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: pink;
    opacity: 0.7;
`;

const Sidebar = (): JSX.Element => {
    return (
        <>
            <Wrapper></Wrapper>
        </>
    );
};

export default Sidebar;
