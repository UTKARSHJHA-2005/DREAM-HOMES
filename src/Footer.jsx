import React from 'react';
import { useDarkMode } from './DarkModeContext';
import { FaArrowUp, FaBuilding, FaFacebook, FaInstagram, FaMailBulk, FaMobile, FaMoon, FaSun, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { Link } from 'react-scroll'; 
import house1 from './assets/house1.jpg';
import house2 from './assets/house2.jpg';

const Footer = () => {
  const { DarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer className={`${DarkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-20 px-5 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`} style={{backgroundColor:'#4F1787'}}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>ABOUT US</h1>
          <p className='text-slate-200 text-justify'>
            We specialize in connecting people with their dream homes in the heart of Delhi. With our deep expertise and commitment to excellence, we make finding the perfect property a seamless experience.
          </p>
          <div id='social' className='flex justify-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-[#1F316F] text-white hover:bg-red-400 hover:text-black cursor-pointer transform hover:scale-110 transition-transform'>
              <FaFacebook className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-[#1F316F] text-white hover:bg-red-400 hover:text-black cursor-pointer transform hover:scale-110 transition-transform'>
              <FaInstagram className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-[#1F316F] text-white hover:bg-red-400 hover:text-black cursor-pointer transform hover:scale-110 transition-transform'>
              <FaTwitter className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-[#1F316F] text-white hover:bg-red-400 hover:text-black cursor-pointer transform hover:scale-110 transition-transform'>
              <FaYoutube className='size-5' />
            </div>
          </div>
          <h1 className='text-white mt-8'>© Dream Homes, All Rights Reserved</h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-5' />
            <p className='text-slate-200'>DLF Building, 4th Floor, Gurgaon, India</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5' />
            <p className='text-slate-200'>9462264801</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaPhone className='text-white size-5' />
            <p className='text-slate-200'>9368312086</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMailBulk className='text-white size-5' />
            <p className='text-slate-200'>dreamhomes2001@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={house1} alt='House 1' className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
          </div>
          <div>
            <h1 className='text-lg text-white'>House With Amazing View</h1>
            <p className='text-slate-400'>Rs. 1.5cr</p>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <img src={house2} alt='House 2' className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
          </div>
          <div>
            <h1 className='text-lg text-white'>House With Beach View</h1>
            <p className='text-slate-400'>Rs. 2cr</p>
          </div>
        </div>
      </footer>
      <div id='up' className='bg-blue-700 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
        <Link to='Hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-7 text-white' />
        </Link>
      </div>
    </>
  );
};

export default Footer;
