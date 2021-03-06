import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    background: #312E38;
    -webkit-font-smothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #f4ede8;
  }

  a, span, p {
    color: #f4ede8;
  }

  button {
    cursor: pointer;
  }
`;
