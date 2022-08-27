import React, { useEffect, useRef, useState } from 'react'
import './productShowCase.css'

const ProductShowCase = () => {
    const toggleAnimation=(e)=>{
        if(e[0].isIntersecting){
            setshowAnimation(true)
        }
        
    }
    const ref =useRef(null)
    const option={
        root:null,
        rootMargin:"0px",
        threshold:0.5
    }
    const [showAnimation ,setshowAnimation]=useState(false)
    
    useEffect(() => {
        const observer=new IntersectionObserver(toggleAnimation,option)
        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current)
            }
        }
        
        return()=>{
            
            if(ref.current){
                // eslint-disable-next-line
                observer.unobserve(ref.current)
            }
        }
    })
    
  return (      
    <div className={`product-showcase  ${showAnimation?'scale-in-center':""}`} ref={ref}>
      { showAnimation &&
         <div className='showcase-wrapper'>
         <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png' alt='Mockup-1' className='showcase-ui showcase-mockup-1' />
         <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png' alt='Mockup-2' className='showcase-ui showcase-mockup-2' />
         <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png' alt='Mockup-3' className='showcase-ui showcase-mockup-3' />
         <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png' alt='Mockup-4' className='showcase-ui showcase-mockup-4' />
         <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png' alt='Mockup-5' className='showcase-ui showcase-mockup-5' />
        </div>
      }
    </div>
  )
}

export default ProductShowCase