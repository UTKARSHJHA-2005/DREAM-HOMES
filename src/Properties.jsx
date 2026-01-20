import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarker, FaCamera, FaVideo, FaBath, FaBed } from 'react-icons/fa';
import property1 from './assets/property1.jpg';
import property2 from './assets/property2.jpg';
import property3 from './assets/property3.jpg';
import property4 from './assets/property4.jpg';
import property5 from './assets/property5.jpg';
import property6 from './assets/property6.jpg';

const properties = [
  { img: property1, address: "123 Property Lane", name: "Flat Rent", price: "Rs.30,000 per flat", bath: "3", bed: "3" },
  { img: property2, address: "456 Real Estate Blvd", name: "Flat Rent", price: "Rs.40,000 per flat", bath: "3", bed: "5" },
  { img: property3, address: "789 Housing Street", name: "Flat Rent", price: "Rs.35,000 per flat", bath: "3", bed: "3" },
  { img: property4, address: "101 Home Drive", name: "For Sale", price: "Rs.1.5cr", bath: "3", bed: "5" },
  { img: property5, address: "202 Estate Avenue", name: "For Sale", price: "Rs 2cr", bath: '4', bed: "6" },
  { img: property6, address: "303 Mansion Road", name: "For Sale", price: "Rs.2.5cr", bath: "4", bed: "4" },
];

const Properties = () => {
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
    <div className={`${DarkMode ? 'dark bg-black' : 'light bg-white'}`}>
      <section className='lg:w-[95%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start rounded-2xl gap-8 bg-[#CDC2A5]'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <div data-aos="zoom-in" className='text-red-600 font-bold text-[35px] dark:text-gray'>PROPERTIES</div>
          <div data-aos="zoom-out" className='text-black-450 text-4xl font-semibold dark:text-gray'>Explore the latest</div>
        </div>
        <div className='w-full grid lg:grid-cols-3 grid-cols-1 gap-8'>
          {properties.map((item, idx) => (
            <div key={idx} data-aos="zoom-in" className='relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden'>
              <img src={item.img} alt='property' className='w-full h-[280px] object-cover' />
              <div className='absolute top-2 left-2 flex flex-row gap-2'>
                <button className='bg-[#B8001F] text-white px-2 py-1 hover:text-black hover:bg-white rounded'>Featured</button>
                <button className='bg-[#B8001F] ml-[100px] text-white px-2 py-1 hover:text-black hover:bg-white rounded'>Sales</button>
                <button className='bg-[#B8001F] text-white px-2 py-1 hover:text-black hover:bg-white rounded'>Active</button>
              </div>
              <div className='absolute bottom-2 left-2 right-2 flex flex-col gap-2'>
                <div className='text-white'>
                  <FaMapMarker className='inline-block mr-2 text-black' />
                  <span className='hover:cursor-pointer' style={{ color: 'black', fontWeight: 'bolder', backgroundColor: 'white' }}>{item.address}</span>
                </div>
                <div className='flex gap-4 text-black hover:cursor-pointer'>
                  <FaVideo />
                  <FaCamera />
                </div>
                <div className='flex gap-4 p-2 bg-white'>
                  <div className='flex items-center gap-2'>
                    <FaBath className='text-red-400' />
                    <span>{item.bath}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaBed className='text-red-400' />
                    <span>{item.bed} </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
