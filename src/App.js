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
import SpecialMenuContextProvider from './contexts/SpecialMenuContext'
import CompanyInfoContextProvider, { CompanyInfoContext } from './contexts/CompanyInfoContext';

const App = () => {
  return (
    <div>
      <Header />
      <CompanyInfoContextProvider>
        <TopImg />
      </CompanyInfoContextProvider>
        <OurStory />
      <SpecialMenuContextProvider>
        <SpecialMenu />
      </SpecialMenuContextProvider>
      <RandomQuote />
      <ReviewsContextProvider>
        <Reviews />
      </ReviewsContextProvider>
      <CompanyInfoContextProvider>
        <ContactUs />
      </CompanyInfoContextProvider>
      <Footer />
    </div>
  );
}

export default App;
