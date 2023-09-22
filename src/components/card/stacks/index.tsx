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
    { Icon: SiHtml5, name: 'HTML5' },
    { Icon: SiCss3, name: 'CSS3' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiGithub, name: 'GitHub' },
    { Icon: BsGit, name: 'Git' },
    { Icon: SiDocker, name: 'Docker' },
    { Icon: IoLogoNodejs, name: 'Node.js' },
    { Icon: SiNestjs, name: 'Nest.js' },
    { Icon: SiPrisma, name: 'Prisma' },
  ];

  return (
    <section aria-label="Seção das tecnologias que tenho conhecimento">
      {icons.map((item, index) => (
        <CardSession>
          <div key={index}>
            <item.Icon className="icons" />
            <h3>{item.name}</h3>
          </div>
        </CardSession>
      ))}
    </section>
  );
}
