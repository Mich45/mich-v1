import { createGlobalStyle } from 'styled-components';
import * as fonts from '../public/assets/fonts';
import { colors } from './themes';
const GlobalStyle = createGlobalStyle`
${fonts}

* {
    box-sizing: border-box;
    
  }

  html {
    scroll-behavior: smooth;
  }

::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

 body {
    color: ${colors.gray.grayPrimary}
     padding: 0;
     margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
     font-family: 'Inter', "Segoe UI", system-ui, -apple-system, blinkmacsystemfont, helvetica, arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

a {
    color: inherit;
    text-decoration: none;
}


`;

export default GlobalStyle;
