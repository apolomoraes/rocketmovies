import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background800};
    color: ${({ theme }) => theme.colors.white};
  }

  body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    outline: none;
  }


  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, 
  a:hover {
    filter: brightness(0.9);
  }
`;