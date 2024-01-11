import { FC } from 'react';
import Contacts from './Items/Contacts';

const Production: FC = () => (
  <div className="footer__item">
    <p>Movement is based in New York and Los Angeles.</p>
    <Contacts />
  </div>
);

export default Production;
