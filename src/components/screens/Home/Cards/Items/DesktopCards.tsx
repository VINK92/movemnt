'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

import DragAndDrop from '~/components/base/DragAndDrop/DragAndDrop';
import { contacts } from '~/constants/contacts.const';

// import firstBubble from '~/assets/img/bubbles/1.svg';
// import secondBubble from '~/assets/img/bubbles/2.svg';

const DesktopCards: FC = () => {
  const [ dimensions, setDimensions ] = useState({
    innerHeight: 890,
    innerWidth: 1440,
  });

  useEffect(() => {
    // if (typeof window !== undefined) {
    const { innerWidth, innerHeight } = window;
    setDimensions({ innerHeight, innerWidth });
    // }
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // if (typeof window !== undefined) {
    const { innerWidth, innerHeight } = window;
    const handler = () => setDimensions({ innerHeight, innerWidth });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
    // }
  }, []);

  return (
    <>
      <DragAndDrop
        x={ 38 }
        y={ dimensions.innerHeight / 1.15 } // 74
        className="cards__card cards__card_add-2 bubble_large"

      >
        {/* <Image src={ firstBubble } alt="firstBubble" /> */}
        <p className="card__contacts_inline">
          <span style={ { marginLeft: 50 } }>Movemnt.digital</span>
          is a bicoastal creative web and production studio with offices in Los Angeles and New York.
          <br />
          We offer bespoke brand strategies, user-centric websites, and tasteful storytelling creatives to elevate multi-platform brand channels.
          <br />
          Our services are tailored to the worlds of fashion, lifestyle, and technology.
        </p>
      </DragAndDrop>
      <DragAndDrop
        x={ 554 }
        y={ dimensions.innerHeight / 1.22 } // 130
        className="cards__card cards__card_2 bubble_medium"
      >
        {/* <Image src={ secondBubble } alt="secondBubble" /> */}
        <p>
          <span style={ { marginRight: 50 } }>Services</span>
          Studio: Creative strategy, Brand identity, web design,
          <br />
          Web development, Technical support.
          <br />
          Production: Art direction, Brand content, E-commerce, Motion, Retouching.
        </p>
      </DragAndDrop>
      <DragAndDrop
        x={ dimensions.innerWidth - dimensions.innerWidth / 5 }
        y={ dimensions.innerHeight / 1.15 } // 87
        className="cards__card cards__card_add-2 bubble_small"
      >
        {contacts.map((contact) => (
          <span key={ contact.href } className="card__contacts_block">
            <span style={ { marginRight: 30 } }>{contact.label}</span>
            <Link href={ contact.href } target="_blank">
              {contact.value}
            </Link>
          </span>
        ))}
      </DragAndDrop>
    </>
  );
};

export default DesktopCards;
