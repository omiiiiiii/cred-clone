import React from 'react'
import Button from '../common/Button'
import './herosection.css'
const HeroSection = () => {
  return (
    <div className='hero-wrapper-section'>
      <div className='flex absolute-center hero-claim-label'>
        <div className='claim-text'>pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className='claim-anchor'>claim now<img src='https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png' className='claim-arrow' alt='CRED-LOGO' /></div>
        </div>
        <div className='flex absolute-center flex-col max-width hero-section '>
            <div className='hero-heading'>rewards for paying credit card bills.</div>   
            <div className='hero-sub-heading'>join 9M+ members who win rewards and cashbacks everyday</div>  
            <Button buttonText='Download CRED' />   
        </div>

    </div>
  )
}

export default HeroSection