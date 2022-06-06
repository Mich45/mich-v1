import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
width: 40px;
height: 200px;
position: fixed;
transform: translate(-50%, -50%);
right: 10px;
top: 50%;
z-index: 1;
background-color: #2826260a;
border-radius: 4px;
`;

const Sidebar = (): JSX.Element => {
    return (
        <>
        <Wrapper></Wrapper>
        </>
  )
}

export default Sidebar