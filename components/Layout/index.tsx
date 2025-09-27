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
    padding-inline: 20px;

    .bar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        transform: translateY(100%);
    }

    .bar1 {
        background-color: black;
    }

    .bar2 {
        background-color: rgb(217, 253, 245);
    }

 

    @media ${device.laptop} {
        padding-inline: 0px;
    }
`;

const MainOverlay = styled.div`
    position: relative;
    margin-top: 3.5em;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
    const container = useRef<HTMLDivElement>(null);
    const mainContainer = useRef<HTMLDivElement>(null);
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

        // Preloader animation
        tl.to('.bar', {
            onStart: () => {
                gsap.set(mainContainer.current, { opacity: 0 });
            },
            y: '-100%',
            duration: 1.7,
            stagger: 0.5,
        })
            .set(container.current, { display: 'none' })
            .to(mainContainer.current, {
                opacity: 1,
                duration: 0.2,
                onComplete: () => {
                    document.body.classList.add('page-loaded');
                },
            });
    });
    return (
        <>
            <Main>
                <div className="overlay">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                </div>
                <div ref={mainContainer}>
                    <Navbar />
                    <MainOverlay>{children}</MainOverlay>
                    <Footer />
                </div>
            </Main>
        </>
    );
};

export default Layout;
