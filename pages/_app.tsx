// eslint-disable-next-line
// @ts-nocheck
import { useEffect } from 'react';
import Head from "next/head";
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyle';
import { MDXProvider } from '@mdx-js/react';
import PostLayout from '../components/MDXComponents/PostLayout';
import {
    Code,
    H2,
    Pre,
    HeadingThree,
    PostImage
} from '../components/MDXComponents/Elements';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            ease: 'ease-out-cubic',
            duration: 1000,
            once: true,
        });
    }, []);

    const components = {
        code: Code,
        h3: HeadingThree,
        pre: Pre,
        h2: H2,
        img: (props) => (
            <PostImage
              alt={props.alt}
              src={props.src}
              width={500}
              height={500}
              {...props}
            />
          ),
        wrapper: ({ components, ...rest }) => <PostLayout {...rest} />,
    };

    return (
        <>
            <Head>
        <title>Michael Hungbo</title>
        <meta
          name="description"
          content="Michael Hungbo - Software Developer & Technical Writer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mich-v1.vercel.app" />
        <meta property="og:title" content="Michael Hungbo" />
        <meta
          property="og:description"
          content="Michael Hungbo - Software Developer & Technical Writer"
        />
        <meta
          property="og:image"
          content="https://mich-v1.vercel.app/preview-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Michael Hungbo" />
        <meta
          name="twitter:description"
          content="Michael Hungbo - Software Developer & Technical Writer"
        />
        <meta
          name="twitter:image"
          content="https://mich-v1.vercel.app/preview-image.jpg"
        />
      </Head>
            <Script
                src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/highlight.min.js"
                strategy="afterInteractive"
            ></Script>
            <Script
                src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/languages/javascript.min.js"
                strategy="afterInteractive"
            ></Script>
            <Script
                src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/languages/markdown.min.js"
                strategy="afterInteractive"
            ></Script>
            <Script
                src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/languages/typescript.min.js"
                strategy="afterInteractive"
            ></Script>
            <MDXProvider components={components}>
                <Layout>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </>
    );
}

export default MyApp;
