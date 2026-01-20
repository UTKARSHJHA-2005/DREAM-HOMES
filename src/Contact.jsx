import React, { useEffect } from 'react'; 
import { useDarkMode } from './DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaLocationArrow, FaPhone, FaVoicemail } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

const Contact = () => {
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
    <div className={`${DarkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section id='contact' className={`${DarkMode ? 'dark bg-black' : 'light bg-red-300'} lg:w-[95%] w-full h-fit m-auto rounded-xl grid bg-[#795757] lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 py-20 gap-10`}>
      
      <div data-aos='zoom-in' className='bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl'>
        <h1 className='text-2xl text-black font-semibold dark:text-white'>Send us a message today</h1>
        <input type='text' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' placeholder='Enter your full name'></input>
        <input type='email' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' placeholder='Enter your email address'></input>
        <input type='tel' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' placeholder='Enter your phone number'></input>
        <textarea cols='30' rows='5' placeholder='Enter your message here...' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'></textarea>
        <button className='bg-red-900 text-white w-[400px] h-[40px] hover:bg-green-700 hover:text-black font-semibold rounded-md '>SEND EMAIL</button>
      </div>
      <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
        <h1 data-aos="zoom-out" data-aos-delay='200' className='text-pink-300 font-semibold dark:text-white'>REACH US</h1>
        <div className='text-[#161D6F]'><FaLocationPin className='text-black'/> DLf Building, 4th Floor, Gurgaon, India</div>
        <div className='text-[#161D6F]'><FaPhone className='text-black'/>(+91) 9462264801 <br/>(+91) 9368312086</div>
        <div className='text-[#161D6F]'><FaEnvelope className='text-black'/>dreamhomes2001@gmail.com</div>
      </div>
      </section>
    </div>
  );
}

export default Contact;
