import { css } from 'styled-components';

const almaFont = css`
@font-face {
    font-family: 'Alma Mono';
    src: url('/assets/fonts/almamono-regular-webfont.woff') format('woff'),
         url('/assets/fonts/almamono-regular-webfont.woff2') format(woff2);
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Alma Mono';
    src: url('/assets/fonts/almamono-bold-webfont.woff') format('woff'),
         url('/assets/fonts/almamono-bold-webfont.woff2') format(woff2);
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Alma Mono';
    src: url('/assets/fonts/almamono-light-webfont.woff') format('woff'),
         url('/assets/fonts/almamono-light-webfont.woff2') format(woff2);
    font-weight: 300;
    font-style: normal;
  }
`;

export default almaFont;