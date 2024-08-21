import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection id="hero" />
      <AboutUs id="about" />
      <Services id="services" />
      <Contact id="contact" />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
