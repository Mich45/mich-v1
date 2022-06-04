import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import Michael from '../public/assets/Devfestme.png';
import Noise from '../public/assets/noise.png';
import { colors } from '../styles/themes.js'


const MainContent = styled.main`
height: 100vh;
width: 100%;
position: relative;
`;

const MainOverlay = styled.div`
overflow: hidden;
position: relative;


::after {
  content: '';
  height: 100%;
  width: 100%;
  position: fixed;
  background-image: url(${Noise.src});
  opacity: 0.05;
  background-repeat: repeat;
}

::before {
  content: '';
  height: 100%;
  width: 100%;
  position: fixed;
  // background-image: url(${Michael.src});
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center center;
  background: ${colors.white.white_pink};
  // opacity: 0.25;
  filter: blur(50px);
}
`;

const BannerWrapper = styled.div`
display: flex;
margin: 0 auto;
height: 100vh;
width: 100%;
place-items: center;
place-content: center;
position: relative;
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
font-size: 36px;
font-weight: 600;
`;

const AboutWrapper = styled.div`
width: 50%;

`;

const AboutText = styled.p`
font-size: 16px;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MainContent>
        <MainOverlay></MainOverlay>
        <BannerWrapper>
        <Banner>
            <Paragraph>Hi, I'm Michael Hungbo.</Paragraph>
            <AboutWrapper>
              <AboutText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum veritatis iusto modi eius quibusdam quos itaque nam tempore et nulla ab repudiandae at tenetur sit fugit magni pariatur maiores, deleniti saepe molestiae.
                Consequuntur error ducimus eos dignissimos culpa aliquid, tenetur unde aliquam reiciendis iusto.</AboutText>
            </AboutWrapper>
        </Banner>
        </BannerWrapper>
   </MainContent>
  </>
  )
}

export default Home
