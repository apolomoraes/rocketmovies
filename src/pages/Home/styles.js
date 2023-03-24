import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6 auto;
  grid-template-areas: 
  "header"
  "content"
  ;
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem 0 0;
  margin-bottom: 2rem;
  display: grid;
  overflow-y: auto;

  grid-template-areas: 
  "title"
  "section"
  ;

   .add {
    grid-area: title;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add .button {
    display: flex;
    align-items: center;
    padding: 1.3rem 3.2rem;
    gap: .8rem;
    border-radius: .8rem;
    margin: 4.7rem 0 3.7rem 0;
    border: none;
    background-color: ${({ theme }) => theme.colors.pink};

    color: ${({ theme }) => theme.colors.background800};

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;

    svg{
      width: 2rem;
      height: 2rem;
    }
  }

  .add h2 {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;
  }
  
  .section {
    min-width: 113.7rem;
    grid-area: section;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    height: 45rem;
  }

  .section p {
      margin-top: 1.5rem;
      margin-bottom: 2rem;

      color: ${({ theme }) => theme.colors.font_p};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
  }

  .tag {
    display: flex;
    gap:.8rem;
  }
`;