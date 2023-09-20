import styled from 'styled-components';

export const WhoIAmSession = styled.div`
  background: linear-gradient(to bottom, #8a2be2, #4b0082);
  color: white;

  .intro {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;
    padding: 150px 300px;
  }

  .title {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 100px;
    display: flex;
    justify-content: start;
  }

  h2 {
    display: flex;
    justify-content: start;
    font-size: 30px;
  }

  h3 {
    text-align: justify;
    font-size: 20px;
    max-width: 500px;
    margin: 0 0 0 315px;
  }

  a {
    font-size: 50px;
    cursor: pointer;
    display: flex;
    margin: 0 10px;
    transform: translate(0px, 0px);
    transition: all 0.3s ease-in-out;
    color: #ffffff;
  }

  a:hover {
    transform: translate(0px, -10px);
  }

  @media only screen and (max-width: 600px) {
    .intro {
      padding: 50px 10px;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
      margin: 0 auto;
    }

    a {
      font-size: 18px;
      margin: 0 5px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    .intro {
      padding: 100px 50px;
    }

    h1 {
      font-size: 80px;
    }

    h3 {
      max-width: 450px;
      margin: 0 0 0 180px;
    }

    a {
      font-size: 40px;
      margin: 0 5px;
    }
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    .intro {
      padding: 100px;
    }

    a {
      margin: 0 10px;
    }
  }
`;
