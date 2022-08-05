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

  ::selection {
    background-color: #00dcff;
  }

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #b3b3b3;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

 body {
    text-rendering: optimizeLegibility;
    color: ${colors.gray.lightGray};
     padding: 0;
     margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
     font-family: Inter, "Segoe UI", system-ui, -apple-system, blinkmacsystemfont, helvetica, arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

a {
    color: inherit;
    text-decoration: none;
}

h1{
    font-size: 40px;
    position: relative;
    font-family: 'Product Sans', "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-clip: text;
    text-fill-color: transparent;
    background: rgb(233,68,68);
    background: linear-gradient(302deg,rgb(255 71 0) 19%,rgba(255,68,40,1) 67%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}


`;

export default GlobalStyle;
