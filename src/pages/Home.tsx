import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

const Home = () => {
  useEffect(() => {
    // Update page title
    document.title = "Biomon | Personal Health Intelligence Platform";
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;