import styled from "styled-components";


export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({ theme }) => theme.colors.background700};
  color: ${({ theme }) => theme.colors.gray100};

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;


  border: none;
  resize: none;

  border-radius: 1.0rem;
  padding: 1.6rem;

  &:placeholder {
      color: ${({ theme }) => theme.colors.gray200};
    }
`;