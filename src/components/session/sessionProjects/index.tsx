import { CardProjects } from '../../card';
import { ProjectsSession } from './style';

export function SessionProjects() {
  return (
    <section aria-label="Seção dos projetos já desenvolvidos">
      <ProjectsSession>
        <div>
          <CardProjects />
        </div>
      </ProjectsSession>
    </section>
  );
}
