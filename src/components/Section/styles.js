import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 2.4rem;
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

  >p {
    color: ${({ theme }) => theme.colors.font_p};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
  }
`;