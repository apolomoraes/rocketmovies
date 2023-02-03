import styled from "styled-components";

export const Container = styled.section`

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1.6rem;
  padding: 3.2rem;
  max-width: 112.1rem;

  > h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.colors.white};

    margin-bottom: 0.8rem;
  }

  
`;