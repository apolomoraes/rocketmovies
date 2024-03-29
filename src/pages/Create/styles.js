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
  overflow-y: auto;
  margin: 3.8rem auto;
  padding-right: 1rem;
  height: 75vh;


  .button {
    width: 40rem;
    padding-bottom: 3rem;
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

    button {
      display: flex;
      background: transparent;
      border: none;
      svg {
      color: ${({ theme }) => theme.colors.pink};  
      font-size: 3.5rem;
      }
    }
  }
`;

export const NameEvaluation = styled.div`
  display: flex;
  gap: 4.0rem;

  input[type=number] {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
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