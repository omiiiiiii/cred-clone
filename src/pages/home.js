import React from 'react'
import AppRating from '../components/AppRating'
import Brands from '../components/Brands'
import Header from '../components/common/Header'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'
import CredStory from '../components/Credstory'
import FeelSpecial from '../components/FeelSpecial'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import MobileScroll from '../components/MobileScroll'
import ProductShowCase from '../components/ProductShowCase'
import WindowPeek from '../components/WindowPeek'



const Home = () => {
  
  return (
    <>
    {alert("This clone is only for Education purpose")}
        <Header />
        <HeroSection />
        <ProductShowCase />
        <FeelSpecial />
        <Brands />
        <CredExperience />
        <MobileScroll />
        <div className='non-mobile'> <WindowPeek /></div>
        <CredSecurity />
        <CredStory />
        <AppRating />
        <Footer />
    </>
  )
}

export default Home     