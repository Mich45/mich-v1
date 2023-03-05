import { css } from 'styled-components';

const spaceGroteskFont = css`
    @font-face {
        font-family: 'Space Grotesk';
        src: url('/assets/fonts/space-grotesk/SpaceGrotesk-Bold.woff2')
            format('woff2');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Space Grotesk';
        src: url('/assets/fonts/space-grotesk/SpaceGrotesk-Medium.woff2')
            format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Space Grotesk';
        src: url('/assets/fonts/space-grotesk/SpaceGrotesk-Regular.woff2')
            format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

export default spaceGroteskFont;
