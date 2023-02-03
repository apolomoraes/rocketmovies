import styled from "styled-components";

export const Container = styled.span`
  background: ${({ theme }) => theme.colors.gray400};  
  border-radius: .8rem;
  
  padding: .5rem 1.6rem;

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;

  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;