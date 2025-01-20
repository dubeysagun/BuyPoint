import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import LatestCollection from '../components/LatestCollection';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
