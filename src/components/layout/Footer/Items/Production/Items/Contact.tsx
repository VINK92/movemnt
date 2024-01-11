import { FC } from 'react';
import Link from 'next/link';

import { IContact } from '~/constants/contacts.const';

interface ContactProps {
  contact: IContact;
}

const Contact: FC<ContactProps> = ({ contact: { value, href } }) => (
  <span className="footer__contact">
    <Link href={ href } target="_blank">
      {value}
    </Link>
  </span>
);

export default Contact;
