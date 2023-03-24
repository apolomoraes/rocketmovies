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

// modal-description
.modal-overlay {
  background: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  max-width: 30rem;
  background-color: #232129;
  padding: 1rem;
  border-radius: 5px;
}

.modal-content h2 {
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
}

.modal-content div {
  display: flex;
  gap: 2rem;
}

.modal-content button {
  border: none;
  background: transparent;
  color: #F4EDE8;
  font-size: 1.5rem;
}
`;