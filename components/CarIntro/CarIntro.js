import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

const CarIntro = ({ model }) => {
  return (
    <div className='lg:max-w-[1139px] md:max-w-[650px] m-auto px-[15px] lg:px-[0px] lg:flex-row lg:flex lg:justify-between lg:items-center'>
      <div className='relative grow w-[100%] h-[194px] md:h-[320px]'>
        <Image
          src={model.photo}
          alt={model.name}
          layout='fill'
          className='object-contain lg:object-contain'
        />
      </div>
      <div className='mt-[42px] md:mt-[0]'>
        <span className='text-[20px] lg:w-[475px] font-semibold block mb-[14px] text-[#373737] leading-[1.35]'>
          {model.name}
        </span>
        <h1 className='text-[#191919] tracking-[-0.7px] leading-[1.26] font-semibold mb-[19px] text-[35px] lg:text-[50px] lg:mb-[37px] lg:tracking-[-1px] lg:leading-[1.14] lg:text-[#373737] lg:w-[475px]'>
          {model.title}
        </h1>
        <span className='text-[#373737] block tracking-[-0.1px] leading-[1.69] lg:w-[385px]'>
          {model.description && parse(model.description)}
        </span>
      </div>
    </div>
  );
};

export default CarIntro;
