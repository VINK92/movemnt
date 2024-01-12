import { FC } from 'react';
import Layout from '~/components/layout/Layout';
import MainSlider from './MainSlider/MainSlider';
import DesktopCards from './Cards/Cards';

const Home: FC = () => (
  <Layout title="Home" className="home">
    <MainSlider />
    <DesktopCards />
  </Layout>
);

export default Home;
