import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { colors, device } from '../styles/themes';

const PortfolioContainer = styled.div`
    color: white;

     @media ${device.laptop} {
    margin: 0 115px;
    padding: 20px;
    }
`;

const Section = styled.section`
    margin-bottom: 40px;
`;

const Heading = styled.h2`
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
`;

const ArticleList = styled.ul`
    list-style: none;
    padding: 0;
`;

const ArticleItem = styled.li`
    margin: 10px 0;

    a {
        text-decoration: underline;
        &:hover {
            color: ${colors.gray.lightGray};
        }
    }
`;

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    margin-top: 20px;
`;

const VideoContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Intro = styled.div`
    margin-bottom: 40px;
    line-height: 1.6;
`;

const Title = styled.h1``;

const SubTitle = styled.h2`
    color: ${colors.gray.lightGray};
    padding-top: 0;
    margin-top: 0;
`;

const Details = styled.details`
    border: 1px solid rgb(102 193 170 / 99%);
    border-radius: 4px;
    padding: 0.5em 0.5em 0;
    margin-top: 10px;
    width: 70%;
`;

const Summary = styled.summary`
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    cursor: pointer;
`;

const Writing = () => {
    return (
        <PortfolioContainer>
            <Title>Hi, I'm Michael.</Title>
            <Title>
                And I'm a technical writer and documentation specialist.
            </Title>
            <Intro>
                <p>
                    They say the best software engineers make good writers -
                    I’ve found that to be true.
                </p>
                <p>
                    I’ve always valued clear, concise writing and documentation
                    because they make my work, and that of others, less
                    laborious. My experience as a software developer has helped
                    me understand just how important good writing really is.
                </p>
                <p>
                    Over the past five years, I’ve built professional technical
                    writing skills while working with reputable companies such
                    as Cloudinary, Minexa.ai, CustomGPT.ai, and Proxycurl. These
                    experiences have sharpened my ability to communicate complex
                    ideas clearly and effectively.
                </p>
                <p>
                    As a technical writer, my expertise includes API
                    documentation, user guides and manuals, knowledge base and
                    help articles, long-form technical articles in programming
                    and web development, proofreading, and editing.
                </p>
            </Intro>

            <Section>
                <Heading>Technical article samples</Heading>
                <Details>
                    <Summary>Cloudinary</Summary>
                    <p>
                        I wrote over 50 technical articles for Cloudinary
                        anonymously on topics in Python and JavaScript
                        programming.
                    </p>
                    <ArticleList>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/video-effects/how-to-extract-frames-from-video-in-python"
                                target="_blank"
                            >
                                How to Extract Frames from Video in Python
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/image-effects/how-to-set-up-image-registration-in-python"
                                target="_blank"
                            >
                                How to Set Up Image Registration in Python
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/image-effects/face-detection-in-python"
                                target="_blank"
                            >
                                The Basics of Face Detection in Python
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/image-effects/a-guide-to-converting-images-to-grayscale-with-python-introduction"
                                target="_blank"
                            >
                                A Guide to Converting Images to Grayscale with
                                Python
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/image-effects/how-to-replace-colors-in-an-image"
                                target="_blank"
                            >
                                How to Replace Colors in an Image
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/image-effects/how-to-make-a-low-quality-image-look-better"
                                target="_blank"
                            >
                                How to Make a Low-Quality Image Look Better
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/image-effects/creating-an-image-overlay-with-javascript"
                                target="_blank"
                            >
                                Creating an Image Overlay with JavaScript
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/image-effects/python-image-analysis"
                                target="_blank"
                            >
                                Python Image Analysis Tools and Techniques:
                                Where to Start
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/image-effects/multiple-file-upload-in-php"
                                target="_blank"
                            >
                                How to Implement Multiple File Upload in PHP
                                Like a Pro
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://cloudinary.com/guides/video-effects/video-thumbnails"
                                target="_blank"
                            >
                                8 Tips To Make Amazing Video Thumbnails
                            </Link>
                        </ArticleItem>
                    </ArticleList>
                </Details>

                <Details>
                    <Summary>Refine</Summary>
                    <p>
                        I wrote over 50 articles for Cloudinary Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Sunt labore
                        eos corporis ab rem harum accusantium maiores
                        consectetur perferendis quos culpa magni repellendus,
                        mollitia qui sapiente, expedita sequi dolorum error.
                    </p>
                    <ArticleList>
                        <ArticleItem>
                            <Link
                                href="https://refine.dev/blog/data-fetching-next-js-useswr/#custom-caching-strategies"
                                target="_blank"
                            >
                                How to Fetch Data in React with useSWR
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://refine.dev/blog/using-next-image/"
                                target="_blank"
                            >
                                Nextjs Image Optimization With Examples
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://refine.dev/blog/mui-datagrid-refine/"
                                target="_blank"
                            >
                                Using Material UI DataGrid component with Refine
                                App{' '}
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://refine.dev/blog/next-js-with-typescript/
"
                                target="_blank"
                            >
                                A Guide For Using Nextjs With TypeScript{' '}
                            </Link>
                        </ArticleItem>
                    </ArticleList>
                </Details>

                <Details>
                    <Summary>Proxycurl</Summary>
                    <p>
                        I wrote over 50 articles for Cloudinary Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Sunt labore
                        eos corporis ab rem harum accusantium maiores
                        consectetur perferendis quos culpa magni repellendus,
                        mollitia qui sapiente, expedita sequi dolorum error.
                    </p>
                    <ArticleList>
                        <ArticleItem>
                            <Link
                                href="https://example.com/proxycurl-article-1"
                                target="_blank"
                            >
                                Integrating Proxycurl's APIs for Data Enrichment
                            </Link>
                        </ArticleItem>
                        <ArticleItem>
                            <Link
                                href="https://example.com/proxycurl-article-2"
                                target="_blank"
                            >
                                Enhancing Web Scraping with Proxycurl's Services
                            </Link>
                        </ArticleItem>
                    </ArticleList>
                </Details>
            </Section>

            <Section>
                <Heading>Documentation samples</Heading>
                <ImageGrid>
                    <Image
                        src="/assets/Moon.svg"
                        alt="Documentation 1"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/assets/Moon.svg"
                        alt="Documentation 2"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/assets/Moon.svg"
                        alt="Documentation 3"
                        width={300}
                        height={200}
                    />
                </ImageGrid>
            </Section>

            <Section>
                <Heading>Talks and Videos</Heading>
                <VideoContainer>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                        allowFullScreen
                    ></iframe>
                </VideoContainer>
            </Section>
        </PortfolioContainer>
    );
};

export default Writing;
