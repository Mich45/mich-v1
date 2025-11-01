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

    @media ${device.laptop} {
        padding-inline: 0px;
    }
`;

const MainOverlay = styled.div`
    position: relative;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
    const container = useRef<HTMLDivElement>(null);
    const mainContainer = useRef<HTMLDivElement>(null);
    const waveRef = useRef<SVGSVGElement>(null);
    const wavePathRef = useRef(null);

    // Define the SVG path shapes used for morphing
    const initialShape =
        'M469.539032,263.986786H-0.000001L0,263.557617c66.11113,0.429169,351.088104,0.429169,469.539032,0.208344V263.986786z';
    const shape2 =
        'M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z';
    const shape3 =
        'M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786z';

    useGSAP(() => {
        // Hide content initially
        gsap.set(mainContainer.current, { display: 'none' });

        // Define morph sequences
        const tl1 = gsap.timeline();
        const tl2 = gsap.timeline();
        const tl3 = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

        // First morphing sequence
        tl1.to(wavePathRef.current, {
            attr: { d: shape2 },
            ease: 'power2.in',
            duration: 1.8,
        }).to(wavePathRef.current, {
            attr: { d: shape3 },
            fill: '#000',
            ease: 'power2.out',
            onComplete: () => {
                    gsap.set(waveRef.current, {yPercent: -100 });
                },
        });

        // Second morphing sequence (repeats similar pattern)
        tl2.to(wavePathRef.current, {
             onStart: () => {
                    gsap.set(waveRef.current, {yPercent: 0 });
                },
            attr: { d: shape2 },
            ease: 'power2.in',
            duration: 1.8,
        }).to(wavePathRef.current, {
            attr: { d: shape3 },
            fill: '#000',
            ease: 'power2.out',
            duration: 1.8,
        });

        // Reveal content, hide wave
        tl3.to(mainContainer.current, {
            display: 'block',
            duration: 0.5,
            onStart: () => {
                gsap.to(waveRef.current, {
                    duration: 1,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.set(waveRef.current, {
                            display: 'none',
                        });
                    },
                });
            },
            onComplete: () => {
                document.body.classList.add('page-loaded');
            },
        });

        // Combine all timelines into one main sequence
        const main = gsap.timeline();

        main.add(tl1)
            .add(tl2)
            .add(tl3, '+=0.5'); // small delay before revealing
    });

    return (
        <>
            <Main>
                <svg
                    ref={waveRef}
                    className="wave"
                    style={{ width: '100vw', height: '100vh' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 469.539032 263.986786"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={wavePathRef}
                        id="wave-path"
                        fill="#0b0b0cff"
                        d={initialShape}
                    />
                </svg>
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
