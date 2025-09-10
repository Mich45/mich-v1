import { css } from 'styled-components';

const NeueMontrealFont = css`
    @font-face {
        font-family: 'Neue Montreal';
        src: url('/assets/fonts/neue-montreal/PPNeueMontreal-Bold.otf')
            format('otf');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Neue Montreal';
        src: url('/assets/fonts/neue-montreal/PPNeueMontreal-Medium.otf')
            format('otf');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Neue Montreal';
        src: url('/assets/fonts/neue-montreal/PPNeueMontreal-Book.otf')
            format('otf');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Neue Montreal';
        src: url('/assets/fonts/neue-montreal/PPNeueMontreal-Thin.otf')
            format('otf');;
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
`;

export default NeueMontrealFont;
