import styled from "styled-components";
import backgroundLogin from '../../assets/backgroundLogin.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  padding: 0 8.5rem;

  h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.colors.pink};
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.colors.gray100};

    margin-bottom: 4.8rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.colors.white};

    margin-bottom: 4rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4.2rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;

    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundLogin}) no-repeat center;
  background-size: cover;

`