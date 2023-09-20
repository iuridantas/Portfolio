import styled from 'styled-components';

export const ProjectsSession = styled.div`
  background: linear-gradient(to bottom, #b89fe4, #a88ec7);
  color: white;

  .transition{
      width: 100%;
  }
  
  div {
    max-width: 1440px;
    margin: 0 auto;
  }
  
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  @media only screen and (max-width: 600px) {
  }
`;
