import React from 'react'

const NewsLetterBox = () => {
    const onsubmitHandler = () =>{
        event.preventDefault();
    }

    
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-700'> Subscribe now & get 15% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem Ipsum is simply
        </p>
        <form onSubmit={onsubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 border mx-auto my-6 pl-4'>
            <input className='w-full p-2 sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4  cursor-pointer '>Subscribe</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox
