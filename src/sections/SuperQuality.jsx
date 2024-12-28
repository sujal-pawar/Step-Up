import React from 'react'
import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const superQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex-1 flex flex-col '>
        <h2 className='font-palanquin mt-10 text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide you 
          <span className='text-coral-red ml-2'>Super</span><br />
          <span className='text-coral-red '>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance. </p>
          <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p><div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={520}
          height={500}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default superQuality;
