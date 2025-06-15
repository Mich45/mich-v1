import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { colors, device } from '../../styles/themes';

const Main = styled.main`
    height: auto;
    width: 100%;
    overflow: hidden;
    padding-inline: 20px;

    @media ${device.laptop} {
            padding-inline: 0px;
        }
`;

const MainOverlay = styled.div`
    position: relative;
    
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Main>
            <Navbar />
                <MainOverlay>{children}</MainOverlay>
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
