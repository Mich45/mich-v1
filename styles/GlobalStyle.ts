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
    background-color: ${colors.gray.lightGray};;
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
    background-color: #0a0c0c;
    color: ${colors.slate.textSlate};
     padding: 0;
     margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
     font-family: "Inter", sans-serif, "Segoe UI",  system-ui, -apple-system, blinkmacsystemfont, helvetica, arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body[data-aos-delay='4000'] [data-aos],
[data-aos][data-aos][data-aos-delay='4000'] {
  transition-delay: 4000ms;
}

a {
    color: inherit;
    text-decoration: none;
}


h1{
    font-size: 40px;
    position: relative;
    font-family: 'Product Sans', "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: transparent;
    background:  rgb(45, 235, 187);
    background-clip: text;
    background-size: 225% auto;
}
`;

export default GlobalStyle;
