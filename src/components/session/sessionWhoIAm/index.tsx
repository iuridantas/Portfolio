import { WhoIAmSession } from './style';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';

export function SessionWhoIAm() {
  return (
    <section aria-label="Seção de informações sobre Iuri Dantas">
      <WhoIAmSession>
        <div className="intro">
          <h2>Olá! 👋 Eu sou o Iuri Dantas</h2>
          <h1>FULL-STACK</h1>
          <div className="title">
            <h1>DEVELOPER</h1>
            <a
              href="https://github.com/iuridantas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/iurimota/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://drive.google.com/file/d/1z04nJDStHacsdjI7TXGYqIBG6msW-Dad/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="currículo"
            >
              <BsFillFileEarmarkTextFill />
            </a>
          </div>
          <h3>
            Tenho 26 anos e sou um Desenvolvedor Full-Stack com 6 meses de
            experiência, atuando como freelancer.
          </h3>
        </div>
      </WhoIAmSession>
    </section>
  );
}
