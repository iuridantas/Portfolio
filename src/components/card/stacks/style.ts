import styled from 'styled-components';

export const CardSession = styled.div`
  width: 150px;
  height: auto;
  padding: 16px;

  .icons {
    font-size: 100px;
  }

  .icon-html5:hover {
    color: #e34f26;
  }

  .icon-css3:hover {
    color: #1572b6;
  }

  .icon-react:hover {
    color: #61dafb;
  }

  .icon-typescript:hover {
    color: #007acc;
  }

  .icon-javaScript:hover {
    color: #f7df1e;
  }

  .icon-gitHub:hover {
    color: #181717;
  }

  .icon-git:hover {
    color: #f05032;
  }

  .icon-docker:hover {
    color: #2496ed;
  }

  .icon-nodeJs:hover {
    color: #68a063;
  }

  .icon-nestJs:hover {
    color: #e0234e;
  }

  .icon-prisma:hover {
    color: #2d3748;
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
