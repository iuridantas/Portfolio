import { SessionWhoIAm } from '../../components/sessionWhoIAm';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial do portfólio de Iuri Dantas">
        <SessionWhoIAm/>
    </Container>
  );
}
