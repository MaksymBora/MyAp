import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	margin: 0;
  padding: 10px;
	color: rgb(255, 255, 255);
  background-color: rgb(35, 39, 47);
}

body::-webkit-scrollbar-track {

  display: none;
}

body::-webkit-scrollbar {
  display: none;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
}

ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}
`;
