import type { NextPage } from 'next';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import Michael from '../public/assets/Devfestme.png';
import Noise from '../public/assets/noise.png';
import { colors } from '../styles/themes';
import Tools from '../components/Tools';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const bounce = keyframes`
0%{
  transform: scale(1.1);
}
100%{
  transform: scale(1.2);
}
`;

const slideIn = keyframes`
0%{
  opacity: 0;
  transform: translateY(60%);
  visibilty: hidden;
}

100%{
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}
`;

const MainContent = styled.section`
    width: 100%;
    position: relative;
`;

const BannerWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    place-items: center;
    place-content: center;
    position: relative;
    flex-direction: column;
`;

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 50%;
    width: 100%;
    place-items: center;
    place-content: center;
    position: relative;
`;

const Paragraph = styled.p`
    font-size: 50px;
    font-weight: 600;
    margin: 0;
    color: ${colors.blue.darkBlue};
`;

const Role = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.gray.lightGray};
    margin: 0;
    animation: 1s ${slideIn} ease-in-out;
`;

const Gradient = styled.span`
    background-image: ${(props: { bg: string }) => props.bg};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    filter: contrast(25);
`;

const AboutWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    padding-inline: 20px;
`;

const TextWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const AboutParagraph = styled.p`
    font-size: 16px;
`;

const ArrowWrapper = styled.div`
    display: flex;
    margin-block: 0;
    height: auto;
    width: 100%;
    place-items: center;
    place-content: center;
    position: absolute;
    bottom: 0%;
`;

const Arrow = styled.p`
    font-size: 26px;
    font-weight: 600;
    color: ${colors.gray.lightGray};
    animation: 0.7s ${bounce} infinite cubic-bezier(0.45, 0.2, 0.5, 0.94)
        alternate;
`;

const ResumeWrapper = styled(ArrowWrapper)`
    position: relative;
`;

const Resume = styled.a`
    width: auto;
    height: 36px;
    outline: none;
    padding-inline: 10px;
    border-radius: 4px;
    background-image: linear-gradient(to bottom, #1e5399, #091e39);
    box-shadow: 0 2px 4px #8090a5;
    place-items: center;
    place-content: center;
    display: flex;
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    text-decoration: none;
    transition: transform 0.15s cubic-bezier(0, 0.2, 0.5, 3),
        color 0.1s ease-in-out;

    :hover {
        transform: scale(1.02);
        color: #5e95f9;
    }
`;

const ToolsSection = styled.section`
    width: 100%;
    height: 70vh;
`;

const ProjectSection = styled.section`
    width: 100%;
    height: 100vh;
    background: green;
`;

const ContactSection = styled.section`
    width: 100%;
    height: 60vh;
    background: pink;
`;

const Home: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Michael Hungbo - Software Developer</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Hi, there! I'm Michael Hungbo. Welcome to my personal website."
                />
                <meta
                    name="og:title"
                    content="Michael Hungbo, Fullstack Software Developer"
                />
            </Head>
            <MainContent>
                <BannerWrapper>
                    <Banner>
                        <Paragraph>
                            Hi, I'm
                            <Gradient
                                style={{ marginLeft: '10px' }}
                                bg="repeating-linear-gradient(to right,#3c3c3e 20%,#171717 60%,#ff0018 100%)"
                            >
                                M
                            </Gradient>
                            <Gradient bg="repeating-linear-gradient(to bottom,#a64343 30%, #4c494f 50%, red 100%)">
                                i
                            </Gradient>
                            <Gradient bg="conic-gradient(#fd5151c2 30%,#3e1010 60%,#7b6262 100%)">
                                c
                            </Gradient>
                            <Gradient bg="conic-gradient(#ff0505 10%,#ff186e 60%,#ff6000 70%,#973466c2 80%,#400 100%)">
                                h
                            </Gradient>
                            <Gradient bg="repeating-linear-gradient(to left, #2e4545, red 100%)">
                                a
                            </Gradient>
                            <Gradient bg="conic-gradient(#c42433, #c57868 50%, #000 90%)">
                                e
                            </Gradient>
                            <Gradient
                                style={{ marginRight: '10px' }}
                                bg="repeating-linear-gradient(to bottom,#b04949,#e8710891 ,#3e1f10 90%)"
                            >
                                l
                            </Gradient>
                            Hungbo.
                        </Paragraph>
                        <Role>
                            Fullstack Software Developer. Technical Writer.
                            Creator of things.
                        </Role>
                        <AboutWrapper>
                            <TextWrapper>
                                <AboutParagraph>
                                    Hey there! I'm a fullstack software
                                    developer from Lagos, Nigeria with 2+ years
                                    of experience. Over the years, I have built
                                    exquisite and innovative applications on the
                                    web using modern tools and best practices.
                                </AboutParagraph>
                            </TextWrapper>
                            <TextWrapper>
                                <AboutParagraph>
                                    I'm open to opportunities in web development
                                    and technical writing. I'm open to
                                    opportunities in web development and
                                    technical writing.
                                </AboutParagraph>
                            </TextWrapper>
                        </AboutWrapper>
                    </Banner>
                    <ResumeWrapper>
                        <Resume href="#"> 📰Download Resume</Resume>
                    </ResumeWrapper>
                </BannerWrapper>

                <ArrowWrapper>
                    <Arrow>↓</Arrow>
                </ArrowWrapper>

                <ProjectSection>
                    <Projects />
                </ProjectSection>
                <ToolsSection>
                    <Tools />
                </ToolsSection>

                <ContactSection>
                    <Contact />
                </ContactSection>
            </MainContent>
        </>
    );
};

export default Home;
