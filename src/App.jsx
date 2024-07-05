import React from 'react'
import HeroSection  from './components/HeroSection';
import Navbar from './components/Navbar';
import FeatureSection from './components/FeatureSection';
import WorkFlow from './components/WorkFlow';
import pricing from './components/Pricing';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <FeatureSection/>
      <WorkFlow/>
      <Pricing/>
      <Testimonials />
      <Footer/>
    </>
  );
};

export default App;