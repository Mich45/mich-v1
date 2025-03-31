import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { colors } from '../../styles/themes';
import Noise from '../../public/assets/noise.png';

const Main = styled.main`
    height: auto;
    width: 100%;
    margin-top: 39px;

    ::after {
      background-image: url(${Noise});
      bottom: 0;
      content: "";
      display: block;
      left: 0;
      opacity: .2;
      right: 0;
      top: 0;
      height: inherit;
      width: 100%;
      position: absolute;
      background-size: cover;

    }
`;

const MainOverlay = styled.div`
    overflow: hidden;
    position: relative;
    padding-inline: 15px;

    ::after {
        content: '';
        height: 100%;
        width: 100%;
        position: fixed;
        opacity: 0.05;
        background-repeat: repeat;
    }

    ::before {
        content: '';
        height: 100%;
        width: 100%;
        position: fixed;
    }
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
