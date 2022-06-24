import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
    }

    render() {
        return (
            <Html>
                <Script
                    src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/languages/javascript.min.js"
                />
                <Head>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
    }

export default MyDocument