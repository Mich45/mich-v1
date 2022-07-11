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
    HeadingOne,
} from '../components/MDXComponents/Elements';

function MyApp({ Component, pageProps }: AppProps) {
    const components = {
        code: Code,
        h1: HeadingOne,
        pre: Pre,
        h2: H2,
        wrapper: ({ components, ...rest }) => <PostLayout {...rest} />,
    };

    return (
        <>
            <Script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/languages/javascript.min.js" />
            <Script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/languages/bash.min.js" />
            <Script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/languages/markdown.min.js" />
            <Script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/languages/typescript.min.js" />
            <MDXProvider components={components}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </>
    );
}

export default MyApp;
