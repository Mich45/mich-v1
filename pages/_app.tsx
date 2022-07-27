// eslint-disable-next-line
// @ts-nocheck

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
            <Script id="hljs-script">hljs.initHighlightingOnLoad();</Script>
            <MDXProvider components={components}>
                <>
                    <GlobalStyle />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </>
            </MDXProvider>
        </>
    );
}

export default MyApp;
