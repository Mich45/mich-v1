import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

// Wrapper for entire section
const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`;

const GridContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    
    @media ${device.laptop} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        max-width: 1200px;
    }
`;

const CardWrapper = styled.div`
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    max-width: 350px;

    &:hover {
        transform: translateY(-5px);
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const DetailsWrapper = styled.div`
    padding: 20px;
    color: white;
    text-align: left;
    background-color: #054e38;
`;

const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 14px;
    color: white;
    font-weight: 500;
    margin-bottom: 15px;
    line-height: 1.5;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.a`
    flex: 1;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const WebsiteButton = styled(Button)`
    background-color: ${colors.green.greenPrimary};
    color: ${colors.gray.darkGray};
`;

const GitHubButton = styled(Button)`
    background-color: ${colors.green.greenPrimary};
    color: ${colors.gray.darkGray};
`;

const projectsList = [
    {
        image: '/assets/portfolio.png',
        title: 'Portfolio Website',
        description: 'My portfolio website built with React, Next.js, and MDX.',
        stack: ['react', 'next.js'],
        link: 'https://hungbo.dev',
        source: 'https://github.com/Mich45/portfolio',
    },
    {
        image: '/assets/toolkitz.png',
        title: 'Toolkitz',
        description:
            'A curated list of useful resources for developers and non-developers.',
        stack: ['react', 'next.js', 'mongodb'],
        link: 'https://toolkitz.vercel.app/',
        source: 'https://github.com/Mich45/toolkit',
    },
    {
        image: '/assets/toolkitz.png',
        title: 'Toolkitz',
        description:
            'A curated list of useful resources for developers and non-developers.',
        stack: ['react', 'next.js', 'mongodb'],
        link: 'https://toolkitz.vercel.app/',
        source: 'https://github.com/Mich45/toolkit',
    },
];

const Projects = () => {
    return (
        <Wrapper>
            <GridContainer>
                {projectsList.map((project, key) => (
                    <CardWrapper key={key} data-aos="fade-up" data-aos-duration="2000">
                        <ImageContainer>
                            <img src={project.image} alt={project.title} loading="lazy" />
                        </ImageContainer>
                        <DetailsWrapper>
                            <Title>{project.title}</Title>
                            <Description>{project.description}</Description>
                            <ButtonContainer>
                                <WebsiteButton href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Website
                                </WebsiteButton>
                                <GitHubButton href={project.source} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </GitHubButton>
                            </ButtonContainer>
                        </DetailsWrapper>
                    </CardWrapper>
                ))}
            </GridContainer>
        </Wrapper>
    );
};

export default Projects;
