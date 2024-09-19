import React from 'react'
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offer from '../components/Offers/Offer';
import Newcollection from '../components/Newcollection/Newcollection';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offer />
      <Newcollection />
      <NewsLetter />
    </div>
  )
}

export default Shop