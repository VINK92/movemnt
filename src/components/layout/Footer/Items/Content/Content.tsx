import { FC } from 'react';
import DesktopCards from '~/components/screens/Home/Cards/Items/DesktopCards';
import Breakpoint from '~/enums/breakpoint.enum';
import useBreakpointCheck from '~/hooks/useBreakpointCheck';

const Content: FC = () => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);

  return isMobile ? (
    <div className="footer__item">
      <p>
        <p>
          Services
        </p>
        <br />
        1) Studio: creative strategy, brand identity, art direction, web design, web development, technical support.
        2) Production: brand content (motion, on-model, product), e-commerce (cgi, on-model, product), motion (editing, production, vfx), retouching.

      </p>
      {/* <p>
        We are a creative studio and production that rethinks how startups and
        global brands communicate with their audiences.
      </p> */}
      {/* <p>
        We offer functional, culturally relevant, and emotionally driven solutions
        that connect with audiences worldwide.
      </p> */}
      {/* <h6>What we offer:</h6>
      <ul>
        <li>brand strategy</li>
        <li>web design</li>
        <li>technical support</li>
        <li>creative support</li>
        <li>product photography</li>
        <li>content photography</li>
        <li>seasonable campaigns</li>
        <li>video production</li>
      </ul> */}
    </div>
  ) : null;
};

export default Content;
