import React from 'react';
import Header from './components/Header'
import TopImg from './components/TopImg';
import OurStory from './components/OurStory';
import SpecialMenu from './components/SpecialMenu'
import RandomQuote from './components/RandomQuote'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <TopImg />
      <OurStory />
      <SpecialMenu />
      <RandomQuote />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
