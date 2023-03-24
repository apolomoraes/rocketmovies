import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

   header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 14.4rem;
    padding: 0 14rem;


    background-color: ${({ theme }) => theme.colors.background};

    button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.pink};  
      font-size: 3.5rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 34.0rem;
  margin: 3.0rem auto 11.2rem;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem ;

  width: 18.6rem;
  height: 18.6rem;

    > img {
    border-radius: 50%;
    
    width: 18.6rem;
    height: 18.6rem;
  } 

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    cursor: pointer;

    bottom: .7rem;
    right: .7rem;

    input {
      display: none;
    }

    svg {
      width: 2.0rem;
      height: 2.0rem;
      color: ${({ theme }) => theme.colors.gray400};
    }
  }
`;