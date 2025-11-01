import { css } from 'styled-components';

const NeueMontrealFont = css`
    @font-face {
        font-family: 'Neue';
        src: url('/assets/fonts/neue-montreal/PPNeueMontreal-Bold.otf') format('opentype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Neue';
        src: url('/assets/fonts/neue-montreal/PPNeueMontreal-Medium.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Neue';
        src: url('/assets/fonts/neue-montreal/PPNeueMontreal-Book.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Neue';
        src: url('/assets/fonts/neue-montreal/PPNeueMontreal-Thin.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
`;

export default NeueMontrealFont;
