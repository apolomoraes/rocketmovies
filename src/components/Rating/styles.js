import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.6rem;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ theme }) => theme.colors.pink};
  }
`;