import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import aos from 'aos';
import abouting from './assets/real-estate-business.jpg'
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { DarkMode, toggleDarkMode } = useDarkMode();

  return (
    <section id='about' className={`${DarkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-[20px]`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">

        {/* Image Section */}
        <div data-aos="zoom-in">
          <img src={abouting} alt='aboutimg' className='rounded-2xl w-[500px] h-[190px] object-cover' />
        </div>

        {/* Text Section */}
        <div className="flex flex-col w-full">
          <div data-aos='slide-up' className='text-red-500 font-bold text-xl text-center lg:text-left'>
            WHO WE ARE?
          </div>
          <div data-aos='slide-up' data-aos-delay='100' className='text-black text-[15px] font-semibold leading-7 text-justify mt-4'>
            We are a team of passionate professionals dedicated to helping you find not just a property, but a place you can truly call home.<br />
            With years of experience and a deep understanding of the local market, we specialize in offering tailored solutions for buying, <br />
            selling, renting, and investing in properties.
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className='bg-red-600 text-white w-[20%] text-center rounded-md h-[33px] hover:bg-blue-600 cursor-pointer'>
          READ MORE
        </button>
      </div>
    </section>




  )
}
export default About;