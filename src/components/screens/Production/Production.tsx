import { FC } from 'react';

import Layout from '~/components/layout/Layout';
import Sliders from './Sliders/Sliders';

const Production: FC = () => (
  <Layout title="Production" className="production">

    <Sliders />
  </Layout>

);

export default Production;
