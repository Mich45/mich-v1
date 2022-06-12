import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import { colors } from '../../styles/themes';
import Noise from '../../public/assets/noise.png';

const Main = styled.main`
    height: auto;
    width: 100%;
    margin-top: 39px;
`;

const MainOverlay = styled.div`
    overflow: hidden;
    position: relative;

    ::after {
        content: '';
        height: 100%;
        width: 100%;
        position: fixed;
        background-image: url(${Noise.src});
        opacity: 0.05;
        background-repeat: repeat;
    }

    ::before {
        content: '';
        height: 100%;
        width: 100%;
        position: fixed;
        background: ${colors.white.white_pink};
        filter: blur(40px);
    }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <Main>
                <MainOverlay>
                    <Sidebar />
                    {children}
                </MainOverlay>
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
