import { FC } from 'react';
import Layout from '~/components/layout/Layout';

// import MainSlider from './MainSlider/MainSlider';
import FullScreenVideo from '~/components/FullScreenVideo';
import DesktopCards from './Cards/Cards';

const Home: FC = () => (
  <Layout title="Home" className="home">
    {/* <MainSlider /> */}
    <FullScreenVideo src="/2_move_test_3_mb.mp4" />
    <DesktopCards />
  </Layout>
);

export default Home;
