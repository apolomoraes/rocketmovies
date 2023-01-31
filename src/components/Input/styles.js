import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  

  border-radius: 1.0rem;
  padding: 1.9rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.background700};
  color: ${({ theme }) => theme.colors.gray100};

  > input {
    width: 100%;
    height: 10px;

    color: ${({ theme }) => theme.colors.gray100};

    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.colors.gray200};
    }

  }

  > svg {
      margin: 0 0.3rem 0 1rem;
    }

`;