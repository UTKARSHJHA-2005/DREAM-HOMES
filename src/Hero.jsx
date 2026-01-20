import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import realestate from './assets/real-estate-business.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { DarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${DarkMode ? 'dark bg-black' : 'light bg-white'}`}>
        <section id='Hero' data-aos="zoom-out"
          className='w-[99%] h-[500px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-10 gap-7 z-20'
          style={{ backgroundImage: `url(${realestate})` }}>
          <h1 data-aos="zoom-out" className='text-6xl font-semibold text-white mb-[25px]'>FIND YOUR HOME IN DELHI </h1>
          <p data-aos="zoom-out" className='text-3xl text-xl text-white lg:pr-[500px] pr-0'> We specialize in connecting people with their dream homes in the heart of Delhi. With our deep expertise and commitment to excellence, we make finding the perfect property a seamless experience.</p>
        </section>
      </div>
      <div className='w-[99%]'>
        <h1 className='text-black text-2xl ml-[20px] font-bold dark:text-black'>LOCATION</h1>
        <input type='text' placeholder='Enter the address' className='bg-white p-2 w-[99%] mt-3 border-b-[1px] border-[#c9c7c1] ml-[20px]'></input>
        <h1 className='text-black text-2xl ml-[20px] font-bold dark:text-black'>TYPE</h1>
        <select name='selectopt' className='bg-white p-2 w-[99%] mt-3 border-b-[1px] text-gray text-md border-[#c9c7c1] ml-[20px]'>
          <option value="" disabled selected>Select Type</option>
          <option value="">Rentals</option>
          <option value="">Sales</option>
          <option value="">Commercial</option>
        </select>
        <h1 className='text-black text-2xl ml-[20px] font-bold dark:text-black'>PROPERTY CATEGORY</h1>
        <select name='selectopt' className='bg-white p-2 w-[99%] mt-3 border-b-[1px] text-gray text-md border-[#c9c7c1] ml-[20px]'>
          <option value="" disabled selected>Property Category</option>
          <option value="">Appartment</option>
          <option value="">Duples</option>
          <option value="">Janta Flat</option>
        </select>
        <br />
        <br />
        <button className='bg-red-600 text-white bg-center w-[99%] text-center rounded-md ml-[20px] h-[33px] hover:bg-green-600'>SUBMIT</button>
      </div>
    </>
  );
}

export default Hero;
