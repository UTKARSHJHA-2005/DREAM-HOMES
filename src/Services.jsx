import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faHouseUser, faScaleBalanced, faMagnifyingGlassLocation, faPenToSquare, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { DarkMode,toggleDarkMode } = useDarkMode();

  const services = [
    {
      icon: <FontAwesomeIcon icon={faBookOpenReader} />,
      title: 'Sell Your Property',
      description: 'We sell your property at the best market rate.',
    },
    {
      icon: <FontAwesomeIcon icon={faHouseUser} />,
      title: 'Home Loans',
      description: 'We give home loans at low interest rates.',
    },
    {
      icon: <FontAwesomeIcon icon={faScaleBalanced} />,
      title: 'Legal Services',
      description: 'Expert legal help from our experts.',
    },
    {
      icon: <FontAwesomeIcon icon={faMagnifyingGlassLocation} />,
      title: 'Home Inspection',
      description: 'We give you what we promised.',
    },
    {
      icon: <FontAwesomeIcon icon={faPenToSquare} />,
      title: 'Evaluation',
      description: 'We offer free evaluation to get a good loan.',
    },
    {
      icon: <FontAwesomeIcon icon={faCameraRetro} />,
      title: 'Photoshoot',
      description: 'We prepare your property’s visual representation.',
    },
  ];

  return (
    <div className={`${DarkMode ? 'dark bg-black' : 'light bg-white'} pb-20`}>
      <section
        id='services'
        className={`lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10  
    ${DarkMode ? 'bg-black' : 'bg-[#E5D9F2]'}`}
      >
        <div className='flex flex-col justify-center items-start gap-4'>
          <div data-aos="zoom-in" className='text-red-800 font-semibold text-[28px] dark:text-gray'>
            OUR SERVICES
          </div>
          <div data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10'>
            Top Real Estate <br /> Services Available
          </div>
        </div>
        <div
          id='services-box'
          className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'
        >
          {services.map((item, idx) => (
            <div
              data-aos='zoom-in'
              data-aos-delay='200'
              key={idx}
              className='bg-white dark:bg-yellow h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-[#FFE5CF] cursor-pointer'
            >
              <div className='p-6 rounded-full bg-red-300'>
                {item.icon}
              </div>
              <div className='text-black text-[22px] font-semibold'>{item.title}</div>
              <p className='text-lg text-slate-700'>{item.description}</p>
              <button className='border-b-2 border-red-600 text-red-600 font-semibold p-0 hover:text-[#3A1078]'>
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
