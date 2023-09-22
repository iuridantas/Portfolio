import styled from 'styled-components';

export const CardSession = styled.div`
  width: 530px;
  height: auto;
  padding: 16px;

  img {
    border-radius: 16px;
  }

  .image-loading {
    filter: blur(10px);
    transition: filter 0.3s;
  }

  h2 {
    font-size: 30px !important;
    text-align: center !important;
  }

  h3 {
    font-size: 16px;
    padding: 5px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: black;
  }

  @media only screen and (max-width: 600px) {
    width: 380px;
    height: auto;

    img {
      height: 360px;
      width: 350px;
    }

    h2 {
      font-size: 20px !important;
    }
  }
`;
