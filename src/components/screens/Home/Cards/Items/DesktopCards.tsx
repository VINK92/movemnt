import { FC } from 'react';
import Link from 'next/link';

import DragAndDrop from '~/components/base/DragAndDrop/DragAndDrop';

import { contacts } from '~/constants/contacts.const';

const DesktopCards: FC = () => {
  const { innerWidth, innerHeight } = window;
  return (
    <>
      <DragAndDrop x={ 30 } y={ innerHeight / 1.35 } className="cards__card cards__card_add-2 card__large__width">
        <p>
          Services:
          1) Studio: creative strategy, brand identity, art direction, web design, web development, technical support.
          2) Production: brand content (motion, on-model, product), e-commerce (cgi, on-model, product), motion (editing, production, vfx), retouching.

        </p>
      </DragAndDrop>
      <DragAndDrop x={ 370 } y={ innerHeight / 1.45 } className="cards__card cards__card_2 card__medium__width">
        <p>
          Movemnt.digital is a bicoastal creative web studio and production with offices in Los Angeles and New York.
          We offer bespoke brand strategies, user-centric websites, and tasteful storytelling creatives to elevate brand channels.
          Our services are tailored to the worlds of fashion, lifestyle, and technology.
        </p>
      </DragAndDrop>
      <DragAndDrop x={ innerWidth / 2 } y={ innerHeight / 1.35 } className="cards__card cards__card_add-2 card__medium__width">
        {contacts.map((contact) => (
          <span key={ contact.href } className="card__contacts_block">
            <Link href={ contact.href } target="_blank">
              {contact.value}
            </Link>
          </span>
        ))}
      </DragAndDrop>
      {/* <DragAndDrop x={ 250 } y={ 270 } className="cards__card cards__card_main">
      <p>
        Email: info@movemnt.digital
        Follow: @movemnt.digital
      </p>
      </DragAndDrop> */}
      {/* <DragAndDrop x={ 59 } y={ 100 } className="cards__card cards__card_add-3"></DragAndDrop> */}
    </>
  );
};

export default DesktopCards;
