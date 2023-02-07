import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 18rem;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.colors.background700};
  color: ${({ theme }) => theme.colors.white};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.colors.gray200}` : "none"};

  border-radius: 1.0rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete,
  .button-add{
    color: ${({ theme }) => theme.colors.pink};

    display: flex;
    font-size: 2.4rem;
    align-items: center;
  }

  > input {
    height: 5rem;
    width: 100%;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    padding: 1.6rem;
    color: ${({ theme }) => theme.colors.gray100};
    background: transparent;  

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray200};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }

`;