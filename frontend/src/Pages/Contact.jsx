import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'


const Contact = () => {
  return (
    <div>

      <div className='text-center mt-20 text-2xl font-bold mb-10'>
        <Title text1={'Contact '} text2={"Us"}/>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl'>Stores</p>
          <p>4563 Junk street</p>
          <p>Terax 450, Bangelore</p>
          <p></p>
          <p>Oraon</p>
        </div>
      </div>
      
    </div>
  )
}

export default Contact


