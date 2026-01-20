import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import aos from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa'; // Import the star icon

const Clients = () => {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { DarkMode,toggleDarkMode } = useDarkMode();

  const clients = [
    {
      image: 'https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726531200&semt=ais_hybrid',
      name: 'Anil Mishra',
      feedback: 'The customer service experience is brilliant. Agents are responsive, attentive, and committed to understanding client needs.',
      star: (
        <>
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
        </>
      ),
    },
    {
      image: 'https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=',
      name: 'Swati Sehgal',
      feedback: 'The variety of services, from property listings to home loans and legal assistance, makes the company a one-stop-shop for real estate solutions.',
      star: (
        <>
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
        </>
      ),
    },
    {
      image: 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg',
      name: 'K.J John',
      feedback: "The company's marketing strategies, including the use of high-quality photos, virtual tours, and digital outreach, are impactful.",
      star: (
        <>
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
          <FaStar className='text-yellow-500 text-xl' />
        </>
      ),
    },
  ];

  return (
    <div className={`${DarkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section
        id='client'
        className='lg:w-[95%] w-full h-fit ml-[31px] bg-cover bg-[#FFDC7F] bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20'
      >
        <div className='flex flex-col justify-center items-start gap-8'>
          <div data-aos='zoom-in' className='text-red-600 font-semibold leading-10'>
            OUR CLIENTS
          </div>
          <div data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10'>
            What Our <br /> Clients Say
          </div>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full'>
          {clients.map((item, idx) => (
            <div
              data-aos='zoom-out'
              data-aos-delay='200'
              key={idx}
              className='bg-gray-700 hover:bg-black cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full'
            >
              <div className='flex justify-start items-start w-full gap-4'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-[70px] rounded-full transform hover:scale-110 transition-transform duration-300'
                />
              </div>
              <div data-aos='slide-up' className='flex flex-col justify-center items-start gap-1'>
                <div className='dark:text-white text-xl text-black font-semibold'>
                  {item.name}
                </div>
              </div>
              <p data-aos='slide-down' className='dark:text-white gap-0 text-md text-justify text-slate-600'>
                {item.feedback}
              </p>
              <div className='flex justify-start items-start gap-2 w-full'>
                {item.star}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
