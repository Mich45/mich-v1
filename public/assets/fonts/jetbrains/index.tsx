import { css } from 'styled-components';

const jetBrainsFont = css`
    @font-face {
        font-family: 'JetBrains Mono';
        src: url('/assets/fonts/jetbrains/JetBrainsMono-Bold.ttf')
            format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('/assets/fonts/jetbrains/JetBrainsMono-Regular.ttf')
            format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('/assets/fonts/jetbrains/JetBrainsMono-Italic.ttf')
            format('truetype');
        font-weight: normal;
        font-style: Italic;
        font-display: swap;
    }
`;

export default jetBrainsFont;
