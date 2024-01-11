import { FC } from 'react';

import { contacts } from '~/constants/contacts.const';
import Contact from './Contact';

const Contacts: FC = () => (
  <div className="footer__contacts">
    {contacts.map((contact) => (
      <Contact key={ contact.href } contact={ contact } />
    ))}
  </div>
);

export default Contacts;
