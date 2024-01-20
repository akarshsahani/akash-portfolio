//Icons
import {
    RxMix,
    RxMagicWand,
    RxCode,
    RxTransform,
    RxRocket,
    RxArrowTopRight,
} from 'react-icons/rx';

//Data
const serviceData = [
    {
        icon: <RxMix/>,
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxMagicWand/>,
        title: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxCode/>,
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxTransform/>,
        title: 'Mobile Apps',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxRocket/>,
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

//Import Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//Required Modules
import { FreeMode, Pagination } from 'swiper';

const ServiceSlider = () => {
  return (
    <Swiper
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        }}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='h-[240px] sm:h-[340px]'
    >
        {
            serviceData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='bg-[rgba(25,49,81,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                            {/* icon */}
                            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                            {/* Title / Description */}
                            <div className='mb-8'>
                                <div className='mb-2 text-lg'>
                                    {item.title}
                                </div>
                                <p className='max-w-[350px] leading-normal'>
                                    {item.description}
                                </p>
                            </div>
                            {/* Arrows */}
                            <div className='text-3xl'>
                                <RxArrowTopRight 
                                className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  );
};

export default ServiceSlider;