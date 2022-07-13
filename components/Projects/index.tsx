import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
`;

const Heading = styled.h1`
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
`;

const ListWrapper = styled.div`
    width: 100%;
    gap: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const CardWrapper = styled.div`
    height: 324px;
    min-width: 1px;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgb(0 0 0 / 12%);
    width: 90%;
    margin: 0 auto;
`;

const Card = styled.div`
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

const ImageContainer = styled.div`
    width: 40%;
    height: 100%;
    overflow: hidden;

    :hover  {
        cursor: pointer;
    }
`;

const Link = styled.a`
    width: 100%;
    height: 100%;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 5px;
        position: relative;
    }
`;

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 1px;
    width: 50%;
    align-items: center;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
padding: 5px 20px;

.detail {
    display: flex;
    flex-direction: column;
    font-size: 15px;

    h5{
        margin: 0;
        margin-bottom: 5px;
        color: #757878;
    }

    p{
        margin-top: 0;
    }
    
    a {
        display: flex;
        place-items: center;
        margin: 0;
        color: black;
        text-decoration: underline;
    }

    .stack-list {
        margin-top: 0;
        display: flex;
        place-content-center;
        place-items: center;
        list-style-type: none;
        padding: 0;

        .stack-item{
            background: #f3483b;
            margin-right: 10px;
            padding: 10px;
            border-radius: 4px;
            color: white;
            font-size: 14px;
        }
    }
}

.list{
    margin-top: 20px;
    font-size: 14px;
}
`;

const projectsList = [
    {
        image: '/assets/portfolio.png',
        description:
            'My portfolio website built with react and nad next with mdx. The wall of the woekd and make it oerlk.',
        stack: ['react', 'next.js'],
        link: 'https://google.com',
        source: 'https://github.com',
    },
    {
        image: '/assets/gdsc.png',
        description:
            'A project built for school lorem23 loremsee stht thee you will see thr wall of the woekd and make it oerlk.',
        stack: ['react', 'redux', 'node.js'],
        link: 'https://google.com',
        source: 'https://github.com',
    },
];

const Projects = () => {
    return (
        <Wrapper>
            <Heading>Stuff I've built</Heading>
            <ListWrapper>
                {projectsList.map((project, key) => {
                    const img = project.image;
                    return (
                        <CardWrapper key={key}>
                            <Card>
                                <ImageContainer>
                                    <Link>
                                        <ImageWrapper>
                                            <img src={img} />
                                        </ImageWrapper>
                                    </Link>
                                </ImageContainer>
                                <DetailsWrapper>
                                    <Details>
                                        <div className="detail">
                                            <h5>DESCRIPTION</h5>
                                            <p>{project.description}</p>
                                        </div>
                                        <div className="detail list ">
                                            <h5>STACK</h5>
                                            <div>
                                                <ul className="stack-list">
                                                    {project.stack.map(
                                                        (stack, key) => {
                                                            return (
                                                                <li
                                                                    key={key}
                                                                    className="stack-item"
                                                                >
                                                                    {stack}
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="detail list">
                                            <h5>VIEW IT LIVE</h5>
                                            <a href={project.link}>
                                                {project.link}
                                            </a>
                                        </div>
                                        <div className="detail list">
                                            <h5>VIEW IT ON GITHUB </h5>
                                            <a href={project.source}>
                                                {project.source}
                                            </a>
                                        </div>
                                    </Details>
                                </DetailsWrapper>
                            </Card>
                        </CardWrapper>
                    );
                })}
            </ListWrapper>
        </Wrapper>
    );
};

export default Projects;
