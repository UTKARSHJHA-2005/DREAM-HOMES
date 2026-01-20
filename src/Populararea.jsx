import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import house1 from './assets/house1.jpg';
import house2 from './assets/house2.jpg';
const Populararea = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  const { DarkMode,toggleDarkMode } = useDarkMode();

  return (
    <div className={`${DarkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section
        className={`ml-[30px] lg:w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20 mb-[35px]`}
        style={{ backgroundColor: '#FF885B' }}
      >
        <div id="top" className="w-full grid lg:grid-cols-3 grid-cols-1 gap-3">
          <div className="flex flex-col justify-start mt-[300px]">
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-red-700 font-semibold text-2xl"
            >
              POPULAR AREAS
            </h1>
            <h1 className="text-black text-[45px] font-semibold leading-10 mt-4">
              Explore Most <br />Popular Areas
            </h1>
          </div>
          <div className="flex flex-row overflow-x-auto gap-6 w-[200%] mt-[300px]">
            <div data-aos="slide-down" data-aos-delay="400">
              <img src={house1} alt='aboutimg' className='rounded-2xl w-[2000px] h-[280px] object-cover' />
            </div>
            <div data-aos="slide-down" data-aos-delay="400">
              <img src={house2} alt='aboutimg' className='rounded-2xl w-[2000px] h-[280px] object-cover' />
            </div>
          </div>
        </div>
        <div id="bottom" className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start gap-6">
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full mb-[260px]"
          >
            <h1 data-aos="slide-up" className="ml-[200px] text-7xl text-black font-bold">3K</h1>
            <h2 data-aos="slide-up">ACTIVE LISTINGS</h2>
            <h1 data-aos="slide-up" className="ml-[20px] text-7xl text-black font-bold">2K</h1>
            <h2 data-aos="slide-up">REVISED MARKET</h2>
            <h1 data-aos="slide-up" className="ml-[20px] text-7xl text-black font-bold">1K</h1>
            <h2 data-aos="slide-up">NEW HOUSES</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Populararea;
