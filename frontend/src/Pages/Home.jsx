import React from 'react'
import Hero from '../Components/Hero'
import Latestcollection from '../Components/Latestcollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsLetterBox from '../Components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
      
    </div>
  )
}

export default Home
