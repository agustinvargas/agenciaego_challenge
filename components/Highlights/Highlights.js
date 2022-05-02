import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

const Highlights = ({ model }) => {
  return model?.model_highlights.map((highlight, i) => (
    <div
      key={i}
      className='max-w-[1139px] m-auto flex flex-col gap-[21px] mt-[40px] lg:mb-[55px] lg:flex-row lg:items-center lg:justify-between odd:lg:flex-row-reverse odd:lg:pl-[90px] even:lg:pr-[90px]'
    >
      <div className='relative w-[345px] h-[194px] lg:w-[559px] lg:h-[296px]'>
        <Image
          src={highlight.image}
          alt={highlight.title}
          layout='fill'
          className='object-cover lg:object-contain'
        />
      </div>
      <div className='lg:w-[385px]'>
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
