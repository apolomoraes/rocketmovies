import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: "header" "content";

  main {
    grid-area: content;

    padding: 4rem 0;
  }
`;

export const Content = styled.div`
  padding-right: 2.4rem;

  overflow-y: scroll;
  height: 40rem;

  max-width: 113.7rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 2.4rem;
    font-size: 3rem;

    color: ${({ theme }) => theme.colors.pink};
  }

  p {
    text-align: justify;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;

    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.0rem;

  .title-rating {
    display: flex;
    gap: 1.9rem;
    align-items: center;

    margin-bottom: 2.4rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;


      color: ${({ theme }) => theme.colors.white};
    }
  }

  .data {
    display: flex;

    align-items: center;


    margin-bottom: 4.0rem;
    gap: 2rem;

    div {
      display: flex;
      gap: .8rem;

    align-items: center;


      p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;

        color: ${({ theme }) => theme.colors.white};
      }

      img {
        width: 2rem;
        height: 2rem;

        border: 1px solid #3E3B47;
        border-radius: 3.5rem;
      }
    }

    span {
      display: flex;
      gap: .8rem;

      align-items: center;

      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: ${({ theme }) => theme.colors.white};

      svg {
        color: ${({ theme }) => theme.colors.pink};
      }
    }
  }

  .tags {
    display: flex;
    gap: .8rem;
  }
`;