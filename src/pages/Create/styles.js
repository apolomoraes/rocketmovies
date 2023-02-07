import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: 'header' 'content';

  main {
    grid-area: content;
  }
`;

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 3.8rem auto;
  padding-right: 1rem;
  overflow-y: auto;
  height: 45rem;

  .buttons {
    display: flex;
    gap: 4rem;

    .delete {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.background900};
      color: ${({ theme }) => theme.colors.pink};

      height: 5.6rem;
      border: 0;
      margin-top: 2.4rem;
      border-radius: 1.0rem;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.1rem;
      text-align: center;

    }
}

  h2 {
    font-weight: 400;
    font-size: 2.0rem;
    line-height: 2.6rem;

    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.colors.font_p};
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    overflow-y: auto;

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

export const TextArea = styled.div`
  margin: 4.0rem 0;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;

  gap: 2.4rem;
  border-radius: .8rem;
  padding: 1.6rem;

  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.colors.background900};
`;