import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as Icons from '../Icons';
import { motion, useAnimation } from 'framer-motion';
import { colors, device } from '../../styles/themes';

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
    margin: 50px auto;
    height: auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(140px, 2fr));
    gap: 40px;
    width: 90%;

    @media ${device.tablet} {
        grid-template-columns: repeat(4, max-content);
        width: 90%;
        gap: 50px;
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(6, max-content);
        padding: 20px;
    }
`;

const Tool = styled(motion.div)`
    width: auto;
    height: auto;
    padding: 10px;
    border-radius: 4px;
    background: transparent;
    display: flex;
    flex-direction: column;
    place-content: space-between;
    place-items: center;
    transition: box-shadow 0.3s ease-in-out;

    p {
        margin: 0;
    }

    :hover {
        box-shadow: 0px 4px 0px #053c28;
        cursor: pointer;
    }

    @media ${device.laptop} {
        width: 140px;
    }
`;

const Header = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    padding-top: 150px;

    .header {
        position: relative;
        font-size: 30px;

        @media ${device.laptop} {
            font-size: 40px;
            &:: before {
                content: '';
                height: 3px;
                width: 100px;
                left: -120px;
                background: #060f36;
                display: flex;
                position: absolute;
                bottom: 20px;
                border-radius: 4px;
            }

            &:: after {
                content: '';
                height: 3px;
                width: 100px;
                right: -120px;
                background: #060f36;
                display: flex;
                position: absolute;
                bottom: 20px;
                border-radius: 4px;
            }
        }
    }
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
        name: 'Git/GitHub',
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
