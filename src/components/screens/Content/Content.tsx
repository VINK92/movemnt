import { FC } from 'react';
import TemplateSlider from '~/components/screens/Content/TemplateSlider/TemplateSlider';
import Layout from '~/components/layout/Layout';
import Breakpoint from '~/enums/breakpoint.enum';
import useBreakpointCheck from '~/hooks/useBreakpointCheck';
import { images, mobileImages } from './TemplateSlider/images.const';
// import Sliders from './Sliders/Sliders';

const Content: FC = () => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  return (
    <Layout title="Content" className="content">
      <TemplateSlider images={ isMobile ? mobileImages : images } />
      {/* <Sliders /> */}
    </Layout>

  );
};

export default Content;
