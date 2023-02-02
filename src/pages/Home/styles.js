import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 11.6rem auto;
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
  
  display: grid;
  grid-template-areas: 
  "title"
  "section"
  ;

   .add {
    grid-area: title;
    display: flex;
    justify-content: space-between;
  }

  .add button {
    display: flex;
    align-items: center;
    padding: 1rem 3rem;
    gap: .8rem;
    border-radius: .8rem;

    border: none;
    background-color: ${({ theme }) => theme.colors.pink};

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
    grid-area: section;
    overflow-y: scroll;

    height: 42rem;
  }
`;