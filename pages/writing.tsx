import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { colors, device } from '../styles/themes';


const PortfolioContainer = styled.div`
  max-width: 800px;
  margin: auto;
  color: white;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Heading = styled.h2`
  border-bottom: 2px solid #ddd;
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
      color: ${colors.gray.lightGray}
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

const Title = styled.h1`
`;


const Details = styled.details`
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
  margin-top: 10px;
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
      <Title>Michael's Technical Writer Portfolio</Title>
      <Intro>
        <p>They say the best software engineers make good writers - I’ve found that to be true.</p>
        <p>I’ve always valued clear, concise writing and documentation because they make my work, and that of others, less laborious. My experience as a software developer has helped me understand just how important good writing really is.</p>
        <p>Over the past five years, I’ve built professional technical writing skills while working with reputable companies such as Cloudinary, Minexa.ai, CustomGPT.ai, and Proxycurl. These experiences have sharpened my ability to communicate complex ideas clearly and effectively.</p>
        <p>As a technical writer, my expertise includes API documentation, user guides and manuals, knowledge base and help articles, long-form technical articles in programming and web development, proofreading, and editing.</p>
      </Intro>
      
      <Section>
        <Heading>Technical article samples</Heading>
        <Details>
          <Summary>Cloudinary
          </Summary>
          <p>I wrote over 50 articles for Cloudinary Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore eos corporis ab rem harum accusantium maiores consectetur perferendis quos culpa magni repellendus, mollitia qui sapiente, expedita sequi dolorum error.</p>
            <ArticleList>
              <ArticleItem>
                <Link href="https://example.com/cloudinary-article-1" target="_blank">
                  Understanding Media Management with Cloudinary
                </Link>
              </ArticleItem>
              <ArticleItem>
                <Link href="https://example.com/cloudinary-article-2" target="_blank">
                  Leveraging Cloudinary's API for Image Optimization
                </Link>
              </ArticleItem>
              <ArticleItem>
                <Link href="https://example.com/cloudinary-article-3" target="_blank">
                  Best Practices for Video Streaming with Cloudinary
                </Link>
              </ArticleItem>
            </ArticleList>
        </Details>

        <Details>
          <Summary>Refine</Summary>
          <p>I wrote over 50 articles for Cloudinary Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore eos corporis ab rem harum accusantium maiores consectetur perferendis quos culpa magni repellendus, mollitia qui sapiente, expedita sequi dolorum error.</p>
            <ArticleList>
              <ArticleItem>
                <Link href="https://example.com/refine-article-1" target="_blank">
                  Building Dynamic Admin Panels with Refine
                </Link>
              </ArticleItem>
              <ArticleItem>
                <Link href="https://example.com/refine-article-2" target="_blank">
                  Leveraging Refine for Scalable Web Applications
                </Link>
              </ArticleItem>
            </ArticleList>
        </Details>

        <Details>
          <Summary>Proxycurl</Summary>
          <p>I wrote over 50 articles for Cloudinary Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore eos corporis ab rem harum accusantium maiores consectetur perferendis quos culpa magni repellendus, mollitia qui sapiente, expedita sequi dolorum error.</p>
            <ArticleList>
              <ArticleItem>
                <Link href="https://example.com/proxycurl-article-1" target="_blank">
                  Integrating Proxycurl's APIs for Data Enrichment
                </Link>
              </ArticleItem>
              <ArticleItem>
                <Link href="https://example.com/proxycurl-article-2" target="_blank">
                  Enhancing Web Scraping with Proxycurl's Services
                </Link>
              </ArticleItem>
            </ArticleList>
        </Details>

        <Details>
          <Summary>Ninetailed</Summary>
          <p>I wrote over 50 articles for Cloudinary Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore eos corporis ab rem harum accusantium maiores consectetur perferendis quos culpa magni repellendus, mollitia qui sapiente, expedita sequi dolorum error.</p>
            <ArticleList>
              <ArticleItem>
                <Link href="https://example.com/ninetailed-article-1" target="_blank">
                  Personalizing User Experiences with Ninetailed
                </Link>
              </ArticleItem>
              <ArticleItem>
                <Link href="https://example.com/ninetailed-article-2" target="_blank">
                  Using Ninetailed for Data-Driven Content Strategies
                </Link>
              </ArticleItem>
            </ArticleList>
        </Details>
      </Section>

      <Section>
        <Heading>Documentation samples</Heading>
        <ImageGrid>
          <Image src="/assets/Moon.svg" alt="Documentation 1" width={300} height={200} />
          <Image src="/assets/Moon.svg" alt="Documentation 2" width={300} height={200} />
          <Image src="/assets/Moon.svg" alt="Documentation 3" width={300} height={200} />
        </ImageGrid>
      </Section>

      <Section>
        <Heading>Talks and Videos</Heading>
        <VideoContainer>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3JZ_D3ELwOQ" frameBorder="0" allowFullScreen></iframe>
        </VideoContainer>
      </Section>
    </PortfolioContainer>
  );
};

export default Writing;
