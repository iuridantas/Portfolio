import { CardProjects } from '../../card';
import { ProjectsSession } from './style';

export function SessionProjects() {
  return (
    <section aria-label="Seção dos projetos já desenvolvidos">
      <ProjectsSession>
        <img className="transition" src="/img/transição.png" />
        <div>
          <CardProjects />
        </div>
      </ProjectsSession>
    </section>
  );
}
