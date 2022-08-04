// eslint-disable-next-line
// @ts-nocheck

import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/assets/fonts/inter/Inter-Regular.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/inter/Inter-Medium.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/product-sans/ProductSans-Medium.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/product-sans/ProductSans-Regular.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
