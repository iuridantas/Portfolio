import { SessionProjects } from '../../components/session/sessionProjects';
import { SessionWhoIAm } from '../../components/session/sessionWhoIAm';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial do portfólio de Iuri Dantas">
      <SessionWhoIAm />
      <SessionProjects />
    </Container>
  );
}
