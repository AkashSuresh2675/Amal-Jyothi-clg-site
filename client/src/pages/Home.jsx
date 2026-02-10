import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import DepartmentsPreview from '../components/home/DepartmentsPreview';
import Highlights from '../components/home/Highlights';
import NewsSection from '../components/home/NewsSection';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <DepartmentsPreview />
      <Highlights />
      <NewsSection />
      <Testimonials />
    </div>
  );
};

export default Home;
