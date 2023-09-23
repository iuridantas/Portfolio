import { EmailSession } from './style';
import { useState, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

export function SessionEmail() {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef<HTMLSpanElement>(null);

  const handleEmailCopy = () => {
    const emailElement = emailRef.current;
    if (emailElement) {
      const email = emailElement.textContent;
      if (email) {
        navigator.clipboard.writeText(email);
        setEmailCopied(true);
        emailElement.classList.add('copied');

        setTimeout(() => {
          setEmailCopied(false);
          emailElement.classList.remove('copied');
        }, 2000);
      }
    }
  };

  return (
    <section aria-label="Seção do meu email">
      <EmailSession>
        <img className="transition" src="/img/transição1.png" alt="Transição" />
        <div>
          <h2>
            Contact <hr />
          </h2>
          <div className="container">
            <AiOutlineMail className="NewsletterIcon" />
            <h3>Entre em Contato</h3>
            <div className="EmailCopy">
              <span ref={emailRef} className={emailCopied ? 'copied' : ''}>
                uri.dantas@hotmail.com
              </span>
              <button onClick={handleEmailCopy}>
                {emailCopied ? 'Email Copiado!' : 'Copiar Email'}
              </button>
            </div>
          </div>
        </div>
      </EmailSession>
    </section>
  );
}
