import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const Main = styled.main`
    height: auto;
    width: 100%;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <Main>
                <Sidebar />
                {children}
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
