//Testimonial Data
const testimonialData =[
    {
        image: '/t-avt-1.png',
        name: 'Aanna',
        position: 'customer',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!' 
    },
    {
        image: '/t-avt-2.png',
        name: 'Doe',
        position: 'customer',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!' 
    },
    {
        image: '/t-avt-3.png',
        name: 'Jimmi',
        position: 'customer',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!' 
    },
];

//Import Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//Required Modules
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft  } from 'react-icons/fa';
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
        navigation={true}
        pagination={{
            clickable: true,
        }}
        // modules={[Navigation, Pagination]}
        className='h-[400px]'
    >
        {
            testimonialData.map((person, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                            {/* Avatar, Name, Position */}
                            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                                <div className='flex flex-col justify-center text-center'>
                                    {/* Avatar */}
                                    <div className='mb-2 mx-auto'>
                                        <Image 
                                        src={person.image}
                                        width={100}
                                        height={100}
                                        alt=''
                                        />
                                    </div>
                                    {/* name */}
                                    <div className='text-lg'>
                                        {person.name}
                                    </div>
                                    {/* position */}
                                    <div className='text-[12px] uppercase font-extralight tracking-widest'>
                                        {person.position}
                                    </div>
                                </div>
                            </div>
                            {/* Quotes and Messages */}
                            <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                                {/* Quote Icon */}
                                <div className='mb-4'>
                                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                                </div>
                                {/* Messges */}
                                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  );
};

export default TestimonialSlider;