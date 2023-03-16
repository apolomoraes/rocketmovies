import 'react-toastify/dist/ReactToastify.css';
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

  *::-webkit-scrollbar {
    width: 0.8rem;
 
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 10rem;
  }  

  body {
    background-color: ${({ theme }) => theme.colors.background800};
    color: ${({ theme }) => theme.colors.white};
    overflow-y: hidden;
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

.Toastify__toast-body {
  font-size: 1.6rem;
}
`;