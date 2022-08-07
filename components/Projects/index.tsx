import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
`;

const Heading = styled.h1`
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
`;

const ListWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    gap: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        width: 85%;
    }
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
    padding: 10px;
    position: relative;

    :: after {
        content: '↑';
        color: white;
        height: 30px;
        width: 30px;
        left: 46%;
        background: #060f36;
        display: flex;
        position: absolute;
        bottom: 2px;
        border-radius: 50%;
    }

    @media ${device.laptop} {
        padding: 20px;

        .details {
            display: flex;
        }

        .img-container {
            width: 40%;
        }
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;

    :hover {
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
        transition: transform 0.3s ease-in-out;

        :hover {
            transform: scale(1.2);
        }
    }
`;

const DetailsWrapper = styled.div`
    display: none;
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
padding: 5px 20px 5px 0;

.detail {
    display: flex;
    flex-direction: column;
    font-size: 15px;

    h5{
        margin: 0;
        margin-bottom: 5px;
        color: ${colors.gray.lightGray};
    }

    p{
        margin-top: 0;
        margin-bottom: 0;
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
            background: #f5605e;
            margin-right: 10px;
            padding: 7px;
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
        image: '/assets/portfolio.jpeg',
        description:
            'My portfolio website built with react My portfolio website built with react  and nad next with mdx. The wall of the woekd and make it oerlk.',
        stack: ['react', 'next.js'],
        link: 'YOU ARE HERE!',
        source: 'https://github.com',
    },
    {
        image: '/assets/gdsc.jpeg',
        description:
            'A project built for school My portfolio website built with react lorem23 loremsee stht thee you will see thr wall of the woekd and make it oerlk.',
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
                                <ImageContainer className="img-container">
                                    <Link
                                        href={
                                            project.link.includes('HERE')
                                                ? '/'
                                                : project.link
                                        }
                                    >
                                        <ImageWrapper>
                                            <img
                                                src={img}
                                                alt="project screenshot preview"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </ImageWrapper>
                                    </Link>
                                </ImageContainer>
                                <DetailsWrapper className="details">
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
                                            <h5>VIEW IT</h5>
                                            <a
                                                href={
                                                    project.link.includes(
                                                        'HERE'
                                                    )
                                                        ? '/'
                                                        : project.link
                                                }
                                            >
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
