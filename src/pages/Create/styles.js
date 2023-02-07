import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas: 'header' 'content';

  main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 3.8rem auto;

  header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
      color: ${({ theme }) => theme.colors.white};

      margin-bottom: 2.5rem;
    }

    a {
      color: ${({ theme }) => theme.colors.pink};  
      font-size: 3.5rem;
    }
  }
`;

export const NameEvaluation = styled.div`
  display: flex;
  gap: 4.0rem;
`;