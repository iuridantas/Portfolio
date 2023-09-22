import { CardProjects } from '../../card/projects';
import { ProjectsSession } from './style';

export function SessionProjects() {
  return (
    <section aria-label="Seção dos projetos já desenvolvidos">
      <ProjectsSession>
        <img className="transition" src="/img/transição.png" />
        <div>
          <h2>
            Projects <hr />
          </h2>
          <CardProjects />
        </div>
      </ProjectsSession>
    </section>
  );
}
