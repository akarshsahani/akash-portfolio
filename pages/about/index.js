// Import Icons
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";


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
        {/*<AvatarAbout /> */}
      </motion.div>

      {/* Inner Section */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Left Section */}
        <div className='flex flex-1 flex-col justify-center'>

        <div className="m-20 w-[400px] min-h-[200px] border-2 border-solid border-gray-400 rounded-[40px]">
                
                <div className="text-center p-8" >
                    <div className=" flex justify-center">
                    <img src="https://dev-akashsahani.pantheonsite.io/wp-content/uploads/2023/09/download_image_1694112489005.png" alt="" className="w-[300px] h-[300px] rounded-[20px]"  />
                    </div>
                    <div className="relative">
                        
                        <h2 className="text-3xl text-white mt-4">Akash Kumar Shani</h2>

                       
                        <h4 className="text-sm text-[#BCBCBCD7] mt-4">@akashsahani</h4> 

                     

<div className='flex justify-evenly mt-4'>
    <a href='https://www.linkedin.com/in/akashkumar2001/' target='_blank' className='cursor-pointer text-2xl group  border border-white border-solid p-3 rounded-[30px] transition-colors duration-500 hover:bg-white hover:text-gray-900'>
        <CiLinkedin className="text-white transition-colors duration-500 group-hover:text-gray-900" />
    </a>

    <a href='https://github.com/akarshsahani' target='_blank' className='cursor-pointer text-2xl group  border border-white border-solid p-3 rounded-[30px] transition-colors duration-500 hover:bg-white hover:text-gray-900'>
        <FaGithub className="text-white transition-colors duration-500 group-hover:text-gray-900" />
    </a>

    <a href='https://www.facebook.com/Akarsh.Sahani/' target='_blank' className='cursor-pointer text-2xl group  border border-white border-solid p-3 rounded-[30px] transition-colors duration-500 hover:bg-white hover:text-gray-900'>
        <FaFacebookF className="text-white transition-colors duration-500 group-hover:text-gray-900" />
    </a>

    <a href='https://www.instagram.com/_akash.sahani/' target='_blank' className='cursor-pointer text-2xl group  border border-white border-solid p-3 rounded-[30px] transition-colors duration-500 hover:bg-white hover:text-gray-900'>
        <FaInstagram className="text-white transition-colors duration-500 group-hover:text-gray-900" />
    </a>

    <a href='https://wa.me/+919955641980' target='_blank' className='cursor-pointer text-2xl group  border border-white border-solid p-3 rounded-[30px] transition-colors duration-500 hover:bg-white hover:text-gray-900'>
        <FaWhatsapp className="text-white transition-colors duration-500 group-hover:text-gray-900" />
    </a>
</div>
<div className='mt-5'>
<button className='font-inter font-semibold border text-base leading-6 rounded-full p-3 w-[250px]  transition-colors duration-500 hover:bg-white hover:text-gray-900'>contact us</button>
</div>
                        
                    </div>
                </div>
            </div>
          {/* <motion.h2 
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

         
          <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          >
            <div className='flex flex-1 xl:gap-x-6 mb-5'>
             
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'> 
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>

             
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'> 
                  <CountUp start={0} end={350} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied Customer
                </div>
              </div>

           
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'> 
                  <CountUp start={0} end={890} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished Projects
                </div>
              </div>

            
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'> 
                  <CountUp start={0} end={12} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning Awards
                </div>
              </div>

            </div>
          </motion.div> */}
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
