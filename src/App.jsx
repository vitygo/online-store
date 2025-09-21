import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import BestProducts from './components/BestProducts/BestProducts'
import AboutUs from './components/AboutUs/AboutUs'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'
import React, {useState, useEffect, useRef} from 'react'
function App() {

const bestProductsRef = useRef(null);
const aboutUsRef = useRef(null)

const handleScroll = (ref) => {
  if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <>

    <Header handleScroll={handleScroll} bestProductsRef={bestProductsRef} aboutUsRef={aboutUsRef}/>
    <Hero/>
    <Features/>
    <BestProducts bestProductsRef={bestProductsRef}/>
    <AboutUs aboutUsRef={aboutUsRef}/>
    <Review/>
    <Footer/>


    
    </>
  )
}

export default App
