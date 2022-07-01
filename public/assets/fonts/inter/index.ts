import { css } from 'styled-components';

const interFont = css`
    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/inter/Inter-Bold.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/inter/Inter-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/inter/Inter-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/inter/Inter-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }
`;

export default interFont;
