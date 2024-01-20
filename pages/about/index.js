// Import Icons
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

//Data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'FrontEnd Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'WOW Awards - Horny',
        stage: '2010 - 2011',
      },
      {
        title: 'UX Achievement Awards',
        stage: '2008 - 2011',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - Tech Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABS DE',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - IDEAL Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC Tech, Texas, US',
        stage: '2011',
      },
      {
        title: 'Master Science - Infu Academy',
        stage: '2009',
      },
      {
        title: 'Certified Consultant - ABC, California, CA',
        stage: '2006',
      },
    ],
  },
];

//React 
import React, { useState } from 'react';

//Components
import AvatarAbout from '../../components/AvatarAbout';
import Circles from '../../components/Circles';

//Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup'



const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full py-32 text-center xl:text-left'>
      <Circles />
      {/* Avatar Image */}
      <motion.div 
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[250px]'>
        <AvatarAbout />
      </motion.div>

      {/* Inner Section */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Left Section */}
        <div className='flex flex-1 flex-col justify-center'>
          <motion.h2 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2'>
            If you <span className='text-accent'> know me</span>, You know my Story everything !
          </motion.h2>

          <motion.p 
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Highly creative strategic media and technology leader, speaker and advisor who has received wide industry recoginition for his impact including being top executives at forties500.
          </motion.p>

          {/* Text Counters */}
          <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          >
            <div className='flex flex-1 xl:gap-x-6 mb-5'>
              {/* Experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'> 
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>

              {/* Customers */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'> 
                  <CountUp start={0} end={350} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied Customer
                </div>
              </div>

              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'> 
                  <CountUp start={0} end={890} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished Projects
                </div>
              </div>

              {/* Awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'> 
                  <CountUp start={0} end={12} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning Awards
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {
              aboutData.map((item, itemIndex) => {
                return (
                  <div
                  key={itemIndex}
                  className={`${ index === itemIndex && 'text-pink-400 after:w-[100%] after:bg-accent after:transition-all after:duration-300'} relative before:ease px-3 py-2 capitalize cursor-pointer overflow-hidden border border-pink-800 bg-white-900 shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40 rounded-full text-center`}
                  onClick={()=> setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })
            }
          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start leading-9'>
            {
              aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div className='flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60' key={itemIndex}>
                    {/* Title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>
                    {/* Icons */}
                    <div className='flex gap-x-4'>
                      {item.icons?.map((icon, itemIndex) => {
                        return <div className='text-2xl text-white'>{icon}</div>
                      })}
                    </div>
                    

                  </div>
                )
              })
            }
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
