import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;
  display: flex;

  gap: 6.4rem;

  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 12.3rem;

  background: ${({ theme }) => theme.colors.background800};
  border-bottom: 1px solid #3E3B47;

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3%;
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  


  > a img {
    width: 6.4rem;
    height: 6.4rem;
    border: 1px solid #3E3B47;
    border-radius: 3.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px;

    strong {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.colors.white};


    }
  }

     .back {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.colors.gray200};
    }
  `;
