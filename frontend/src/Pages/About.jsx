import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={" Us"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6  md:w-2/4 text-blue-700'>
          <p>This website is dedeicated to provide the best quality and comfort clothing to its loyal customer </p>
          <p>The 23-year-old was a key part of the Leverkusen side that won the German league and cup double under Xabi Alonso last year and has also attracted interest from Tottenham.
            Hincapie is understood to have already agreed personal terms with Arsenal and the Gunners remain in talks with Leverkusen over a fee for the Ecuador international.</p>
          <b className='text-gray-600 '> Our Mission</b>
          <p>Whether you want to build a new CV from scratch or improve an existing one, let Zety help you present your work life, personality, and skills on a CV that stands out.</p>
        </div>
      </div>

      <div className='text-3xl py-4'>
        <Title text1={"Why"} text2={"Us"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border p-6 md:px-16 py-8 sm:py-14 flex flex-col gap-6 border-gray-300'>
          <b>Qualit Products</b>
          <p> bla-bla blah</p>
        </div>
        <div className='border p-6 md:px-16 py-8 sm:py-14 flex flex-col gap-6 border-gray-300'>
          <b>Convienence</b>
          <p> bla-bla blah</p>
        </div>
        <div className='border p-6 md:px-16 py-8 sm:py-14 flex flex-col gap-6 border-gray-300'>
          <b>Best Customer service</b>
          <p> bla-bla blah</p>
        </div>
      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default About
