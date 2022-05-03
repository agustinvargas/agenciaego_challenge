import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

const Highlights = ({ model }) => {
  return model?.model_highlights.map((highlight, i) => (
    <div
      key={i}
      className='lg:max-w-[1139px] px-[15px] md:px-[0px] m-auto flex flex-col gap-[21px] mt-[40px] first:mt-[0] md:mb-[55px] md:flex-row md:items-center md:justify-between odd:md:flex-row-reverse odd:md:pl-[90px] even:md:pr-[90px]'
    >
      <div className='relative w-[100%] h-[194px] md:w-[559px] md:h-[296px]'>
        <Image
          src={highlight.image}
          alt={highlight.title}
          layout='fill'
          className='object-cover md:object-contain'
          priority
        />
      </div>
      <div className='md:w-[385px]'>
        <h3 className='text-[#373737] text-[20px] tracking-[-0.4px] leading-[1.35] font-semibold mb-[20px]'>
          {highlight.title}
        </h3>
        <span className='block text-[#373737] tracking-[-0.1px] leading-[1.69]'>
          {highlight.content && parse(highlight.content)}
        </span>
      </div>
    </div>
  ));
};

export default Highlights;
