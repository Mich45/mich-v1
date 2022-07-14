import { css } from 'styled-components';

const productSansFont = css`
    @font-face {
        font-family: 'Product Sans';
        src: url('/assets/fonts/product-sans/ProductSans-Bold.ttf')
            format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Product Sans';
        src: url('/assets/fonts/product-sans/ProductSans-Medium.ttf')
            format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Product Sans';
        src: url('/assets/fonts/product-sans/ProductSans-Regular.ttf')
            format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Product Sans';
        src: url('/assets/fonts/product-sans/ProductSans-Light.ttf')
            format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
`;

export default productSansFont;
