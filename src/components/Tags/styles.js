import styled from "styled-components";

export const Container = styled.span`
  background: ${props => props.background};  
  border-radius: .8rem;
  
  padding: ${props => props.padding};

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;

  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;