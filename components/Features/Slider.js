import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ model }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={15}
      slidesPerView={1.1}
      centeredSlides
      autoplay
      loop
      breakpoints={{
        1020: {
          slidesPerView: 2.1,
        },
      }}
      watchOverflow
      pagination={{ clickable: true }}
      navigation
      className='!static'
    >
      {model?.model_features.map((feature, i) => (
        <SwiperSlide
          key={i}
          className='min-w-[330px] lg:min-w-[300px] opacity-50'
        >
          <div className='max-w-[330px] lg:max-w-[300px] mx-auto'>
            <div className='relative w-[330px] lg:w-[300px] lg:h-[147px] h-[181px] lg:w-[559px] lg:h-[146px]'>
              <Image
                src={feature.image}
                alt={feature.name}
                layout='fill'
                className='object-cover'
              />
            </div>
            <h3 className='mt-[22px] text-[#373737] text-[20px] tracking-[-0.4px] leading-[1.35] font-semibold mb-[20px]'>
              {feature.name}
            </h3>
            <span className='block text-[#373737] tracking-[-0.1px] leading-[1.69]'>
              {feature.description}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
