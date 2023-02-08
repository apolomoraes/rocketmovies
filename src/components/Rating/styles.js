import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.6rem;
  

  svg {
    margin: ${props => props.margin};

    width: ${props => props.width};
    height: ${props => props.height};
    color: ${({ theme }) => theme.colors.pink};
  }
`;