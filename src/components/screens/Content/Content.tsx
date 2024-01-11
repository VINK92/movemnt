import { FC } from 'react';

import Layout from '~/components/layout/Layout';
import Sliders from './Sliders/Sliders';

const Content: FC = () => (
  <Layout title="Content" className="content">

    <Sliders />
  </Layout>

);

export default Content;
