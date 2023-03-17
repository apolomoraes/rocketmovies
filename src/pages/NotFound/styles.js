import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='58' viewBox='0 0 42 58'%3E%3Cg fill='%23dddcdd' fill-opacity='0.23'%3E%3Cpath fill-rule='evenodd' d='M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 50h32v-8H10V18H2v32zm28-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E");

    .img img:nth-child(1),
    .img img:nth-child(2){
      width: 65rem;
    }

  .notFound {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5%;
      height: 100vh;
  }

  .notFound h1 {
      color: red;
      font-size: 10rem;
  }

  .notFound h2 {
      font-size: 5rem;
  }
  
  .notFound h3 {
    font-size: 3.5rem;
  }

  .notFound h1, h2, h3 {
      margin-bottom: 2rem;
  }

  .text {
      height: 50vh;
  }

  a {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      margin-right: 1.25rem;
  }

   a:hover {
      color: red;
  }

  @media only screen and (max-width: 768px) {
      .notFound {
          flex-direction: column;
          justify-content: space-around;
      }
      .notFound div.img img {
          width: 70vw;
          height: auto;
      }
      .notFound h1 {
          font-size: 3.125rem;
      }
      .notFound h2 {
          font-size: 1.5625rem;
      }
      .text a:active {
      color: red;
      text-decoration: underline; 
    }
  }
  `