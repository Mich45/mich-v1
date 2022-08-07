import { css } from 'styled-components';

const productSansFont = css`
    @font-face {
        font-family: 'Product Sans';
        src: url('/assets/fonts/product-sans/ProductSans-Bold.woff2')
            format('woff2');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Product Sans';
        src: url('/assets/fonts/product-sans/ProductSans-Medium.woff2')
            format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Product Sans';
        src: url('/assets/fonts/product-sans/ProductSans-Regular.woff2')
            format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Product Sans';
        src: url('/assets/fonts/product-sans/ProductSans-Light.woff2')
            format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
`;

export default productSansFont;
