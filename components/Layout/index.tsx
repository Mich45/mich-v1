import React, { useRef } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { colors, device } from '../../styles/themes';

const Main = styled.main`
    height: auto;
    width: 100%;
    overflow: hidden;

    @media ${device.laptop} {
        padding-inline: 0px;
    }
`;

const MainOverlay = styled.div`
    position: relative;
    padding-top: 1rem;

     @media ${device.laptop} {
        padding-top: 0;
    }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Main>
                <div>
                    <Navbar />
                    <MainOverlay>{children}</MainOverlay>
                    <Footer />
                </div>
            </Main>
        </>
    );
};

export default Layout;
