import styled from 'styled-components';

export const EmailSession = styled.div`
  background: linear-gradient(to bottom, #b89fe4, #a88ec7);
  color: white;

  .transition {
    width: 100%;
  }

  h2 {
    font-size: 50px;
    text-align: start;
    margin: 10px auto;
  }

  hr {
    width: 175px;
    border-width: 2px;
  }

  h3 {
    font-size: 30px;
  }

  span,
  button {
    font-size: 20px;
    border: 1px solid white;
    width: 500px;
    text-align: center;
    padding: 5px;
  }

  span.copied {
    background: linear-gradient(#ffffff, lightgreen);
  }

  button {
    cursor: pointer;
    background: transparent;
  }

  div {
    max-width: 1440px;
    margin: 0 auto;
  }

  .NewsletterIcon {
    font-size: 100px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .EmailCopy {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    color: black;
    background: linear-gradient(#ffffff, #a88ec7);
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 40px;
      margin: 10px auto 20px 10px;
    }

    hr {
      width: 140px;
    }

    h3 {
      font-size: 26px;
    }

    .NewsletterIcon {
      font-size: 50px;
    }

    span,
    button {
      font-size: 16px;
      width: 300px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    h2 {
      margin: 10px auto 10px 30px;
    }
  }
`;
