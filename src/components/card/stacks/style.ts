import styled from 'styled-components';

export const CardSession = styled.div`
  width: 150px;
  height: auto;
  padding: 16px;

  .icons {
    font-size: 100px;
  }

  h3 {
    font-size: 20px;
    padding: 5px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    width: 100px;

    .icons {
      font-size: 50px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;
