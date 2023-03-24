import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1.6rem;
  padding: 3.2rem;
  width: 99%;
  transition: filter 0.2s;

  > h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.colors.white};

    margin-bottom: 0.8rem;
  }

  :hover {
    filter: brightness(0.9);;
  }
  
`;