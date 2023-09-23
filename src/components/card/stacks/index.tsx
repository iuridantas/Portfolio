import { CardSession } from './style';
import {
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiNestjs,
  SiGithub,
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { BsGit } from 'react-icons/bs';

export function CardStacks() {
  const icons = [
    { Icon: SiHtml5, name: 'HTML5', colorClass: 'icon-html5' },
    { Icon: SiCss3, name: 'CSS3', colorClass: 'icon-css3' },
    { Icon: SiReact, name: 'React', colorClass: 'icon-react' },
    { Icon: SiTypescript, name: 'TypeScript', colorClass: 'icon-typescript' },
    { Icon: SiJavascript, name: 'JavaScript', colorClass: 'icon-javaScript' },
    { Icon: SiGithub, name: 'GitHub', colorClass: 'icon-gitHub' },
    { Icon: BsGit, name: 'Git', colorClass: 'icon-git' },
    { Icon: SiDocker, name: 'Docker', colorClass: 'icon-docker' },
    { Icon: IoLogoNodejs, name: 'Node.js', colorClass: 'icon-nodeJs' },
    { Icon: SiNestjs, name: 'Nest.js', colorClass: 'icon-nestJs' },
    { Icon: SiPrisma, name: 'Prisma', colorClass: 'icon-prisma' },
  ];

  return (
    <section aria-label="Seção das tecnologias que tenho conhecimento">
      {icons.map((item, index) => (
        <CardSession key={index} className="card">
          <div>
            <item.Icon className={`icons ${item.colorClass}`} />
            <h3>{item.name}</h3>
          </div>
        </CardSession>
      ))}
    </section>
  );
}
