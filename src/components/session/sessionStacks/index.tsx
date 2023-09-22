import { StacksSession } from './style';

import { CardStacks } from '../../card/stacks';

export function SessionStacks() {
  return (
    <section aria-label="Seção das tecnologias que tenho conhecimento">
      <StacksSession>
        <img className="transition" src="/img/transição1.png" />
        <div>
          <h2>
            Stacks <hr />
          </h2>
          <CardStacks />
        </div>
      </StacksSession>
    </section>
  );
}
