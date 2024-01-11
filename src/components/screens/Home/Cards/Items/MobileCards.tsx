import { FC } from 'react';
import Link from 'next/link';

import DragAndDrop from '~/components/base/DragAndDrop/DragAndDrop';

import { contacts } from '~/constants/contacts.const';

const MobileCards: FC = () => {
  const { innerWidth, innerHeight } = window;

  return (
    <>
      <DragAndDrop
        x={ 9 }
        y={ innerHeight / 3 }
        className="cards__card cards__card_mobile cards__card_mobile-1"
      >
        <p>
          <b>Movemnt.digital</b>
          {' '}
          is a bicoastal creative web studio and production with offices in Los Angeles and New York.
          We offer bespoke brand strategies, user-centric websites, and tasteful storytelling creatives to elevate brand channels.
          Our services are tailored to the worlds of fashion, lifestyle, and technology.
        </p>
      </DragAndDrop>
      <DragAndDrop
        x={ 9 }
        y={ innerHeight / 2 } // + innerWidth * 0.17
        className="cards__card cards__card_mobile cards__card_mobile-2"
      >
        <span>
          <Link href={ contacts[0].href } target="_blank">
            {contacts[0].value}
          </Link>
        </span>
      </DragAndDrop>
      <DragAndDrop
        x={ innerWidth / 2 + 5 }
        y={ innerHeight / 2 } // + innerWidth * 0.17
        className="cards__card cards__card_mobile cards__card_mobile-3"
      >
        <span>
          <Link href={ contacts[1].href } target="_blank">
            Follow
            {' '}
            {contacts[1].value}
          </Link>
        </span>
      </DragAndDrop>
    </>
  );
};

export default MobileCards;
