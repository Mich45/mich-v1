import { createGlobalStyle } from 'styled-components';
import * as fonts from '../public/assets/fonts';

const GlobalStyle = createGlobalStyle`
${fonts}

* {
    box-sizing: border-box;
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
     padding: 0;
     margin: 0;
     overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
     font-family: 'Inter';
}

a {
    color: inherit;
    text-decoration: none;
}


`;

export default GlobalStyle;
