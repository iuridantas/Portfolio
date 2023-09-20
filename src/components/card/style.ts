import styled from 'styled-components';

export const CardSession = styled.div`
  width: 530px;
  height: auto;
  padding: 16px;

  img {
    height: 500px;
    width: 500px;
    border-radius: 16px;
  }

  .image-loading {
    filter: blur(10px);
    transition: filter 0.3s;
  }

  h2 {
    font-size: 30px;
    text-align: center;
  }

  h3 {
    font-size: 16px;
    text-align: center;
    padding: 5px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    width: 380px;
    height: auto;

    img {
      height: 360px;
      width: 350px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;
