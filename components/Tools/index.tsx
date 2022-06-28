import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as Icons from '../Icons';
import { motion, useAnimation, useViewportScroll } from 'framer-motion';
import { colors } from '../../styles/themes';

type ToolsType = {
    name: string;
    icon: () => JSX.Element;
};

const stagger = {
    hidden: {
        y: 10,
        opacity: 0,
        scale: 0.5,
    },
    reveal: {
        y: 0,
        opacity: 1,
        scale: 1,

        transition: {
            type: 'spring',
            duration: 1.0,
            bounce: 0.5,
        },
    },
};

const container = {
    hidden: {
        y: 60,
    },
    reveal: {
        y: 0,

        transition: {
            staggerChildren: 3.7,
        },
    },
};

const Wrapper = styled(motion.div)`
    margin-top: 30px;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns:
        minmax(200px, max-content)
        repeat(auto-fill, 200px);
    gap: 20px;
    padding: 20px;
`;

const Tool = styled(motion.div)`
    width: 200px;
    height: 50px;
    padding: 10px;
    border: 2px solid #a7a7a7;
    border-radius: 4px;
    background: transparent;
    display: flex;
    place-content: space-between;
    place-items: center;
`;

const Paragraph = styled(motion.p)`
    font-size: 16px;
    margin: 0;
`;

const Header = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
`;

const TOOLS: ToolsType[] = [
    {
        name: 'JavaScript',
        icon: Icons.JavascriptIcon,
    },
    {
        name: 'React.js',
        icon: Icons.ReactIcon,
    },
    {
        name: 'Redux',
        icon: Icons.ReduxIcon,
    },
    {
        name: 'MongoDB',
        icon: Icons.MongodbIcon,
    },
    {
        name: 'Open Source',
        icon: Icons.OpensourceIcon,
    },
    {
        name: 'Express.js',
        icon: Icons.ExpressIcon,
    },
    {
        name: 'TypeScript',
        icon: Icons.TypescriptIcon,
    },
    {
        name: 'Python',
        icon: Icons.PythonIcon,
    },
    {
        name: 'SQL',
        icon: Icons.MysqlIcon,
    },

    {
        name: 'Git && GitHub',
        icon: Icons.GitHubIcon,
    },
    {
        name: 'CI/CD',
        icon: Icons.CiIcon,
    },
    {
        name: 'Figma',
        icon: Icons.FigmaIcon,
    },
    {
        name: 'Tailwind CSS',
        icon: Icons.TailwindcssIcon,
    },
];

const Tools = (): JSX.Element => {
    const { scrollY, scrollYProgress } = useViewportScroll();
    // let position: number;

    const controls = useAnimation();
    const pref: React.MutableRefObject<any> = useRef();
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(pref.current.getBoundingClientRect().top);
            let position = pref.current.getBoundingClientRect().top;
            if (position < 600) {
                console.log(position);
                controls.start('reveal');
            }
        });
    });

    return (
        <>
            <Header variants={container} initial="hidden" animate="reveal">
                <motion.h1
                    style={{
                        fontSize: '40px',
                        color: `${colors.blue.darkBlue}`,
                    }}
                >
                    My Toolkit <span style={{ color: '#fb3a67' }}>🛠</span>{' '}
                </motion.h1>
                <Paragraph>
                    Some of the tools and technologies I work with.
                </Paragraph>
            </Header>
            <Wrapper variants={container} initial="hidden" animate="reveal">
                {TOOLS.map((tool, i) => {
                    return (
                        <Tool
                            ref={pref}
                            whileInView="reveal"
                            initial="hidden"
                            variants={stagger}
                            key={i}
                        >
                            <div>{tool.icon()}</div>
                            <p>{tool.name}</p>
                        </Tool>
                    );
                })}
            </Wrapper>
        </>
    );
};

export default Tools;
