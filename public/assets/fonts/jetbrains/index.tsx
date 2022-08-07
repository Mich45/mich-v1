import { css } from 'styled-components';

const jetBrainsFont = css`
    @font-face {
        font-family: 'JetBrains Mono';
        src: url('/assets/fonts/jetbrains/JetBrainsMono-Bold.woff2')
            format('woff2');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('/assets/fonts/jetbrains/JetBrainsMono-Regular.woff2')
            format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('/assets/fonts/jetbrains/JetBrainsMono-Italic.woff2')
            format('woff2');
        font-weight: normal;
        font-style: Italic;
        font-display: swap;
    }
`;

export default jetBrainsFont;
