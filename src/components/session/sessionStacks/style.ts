import styled from 'styled-components';

export const StacksSession = styled.div`
  background: linear-gradient(to bottom, #b89fe4, #a88ec7);
  color: white;

  .transition {
    width: 100%;
  }

  h2 {
    font-size: 50px;
    margin: 10px auto 50px auto;
  }

  hr {
    width: 140px;
    border-width: 2px;
  }

  div {
    max-width: 1440px;
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 100px;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 40px;
      margin: 10px auto 20px 10px;
    }

    hr {
      width: 110px;
    }

    section {
      gap: 24px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    h2 {
      margin: 10px auto 10px 30px;
    }
  }
`;
