import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyle';
import { MDXProvider } from '@mdx-js/react';
import PostLayout from '../components/MDXComponents/PostLayout';
import { Code } from '../components/MDXComponents/Elements';

function MyApp({ Component, pageProps }: AppProps) {
    const components = {
        code: Code,
        wrapper: ({ components, ...rest }) => <PostLayout {...rest} />,
    };

    return (
        <>
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
