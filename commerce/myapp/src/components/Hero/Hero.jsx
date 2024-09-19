import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/chudi.jpeg';

const Hero = () => {
  return (
    <div className='hero'>
      
       
        <div className='hero-left'>
            <h1> Fashion  World</h1>
           
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>HEY</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>New Collection</p>
                 {/* <p>EXCLUSIVE OFFER</p> */}

            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
         
        </div>
        <div className='hero-right' ></div>
        <img src={hero_image} alt=""/>
    </div>
  )
}

export default Hero