import { css } from 'styled-components';

const interFont = css`
    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/inter/Inter-Bold.woff2') format('woff2');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/inter/Inter-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/inter/Inter-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

export default interFont;
