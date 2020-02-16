import React from 'react';
import Header from './components/Header'
import TopImg from './components/TopImg';
import OurStory from './components/OurStory';
import SpecialMenu from './components/SpecialMenu'
import RandomQuote from './components/RandomQuote'
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ReviewsContextProvider from './contexts/ReviewsContext';

const App = () => {
  return (
    <div>
      <Header />
      <TopImg />
      <OurStory />
      <SpecialMenu />
      <RandomQuote />
      <ReviewsContextProvider>
        <Reviews />
      </ReviewsContextProvider>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
