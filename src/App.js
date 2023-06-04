import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
import Testimonials from './components/testimonials/Testimonials';
import About from './components/About/About';
import GetInTouch from './components/GetInTouch/GetInTouch.js';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <HeroSection />
      <Services />
      <Testimonials />
      <About />
      <GetInTouch />
      <Footer/>
    </div>
  );
}

export default App;