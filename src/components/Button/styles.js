import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.gray400};

  height: 5.6rem;
  border: 0;
  margin-top: 2.4rem;
  border-radius: 1.0rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
  text-align: center;

  &:disabled {
    opacity: 0.5;
  }
`;