import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ModelsGrid = ({ models, sort, filter }) => {
  const router = useRouter();

  const handleNavigation = id => {
    router.push(`/modelos/${id}`);
  };

  return (
    <div className='grid gap-[44px] lg:gap-x-[64px]  grid-cols-1 mt-[64px] lg:grid-cols-4'>
      {models
        ?.filter(model => {
          if (filter?.value) {
            return model.segment == filter.value;
          }
          return true;
        })
        ?.sort((a, b) => {
          if (sort) {
            if (sort.value === 'DES_PRICE') {
              return a.price - b.price;
            }
            if (sort.value === 'ASC_PRICE') {
              return b.price - a.price;
            }
            if (sort.value === 'ASC_YEAR') {
              return a.year - b.year;
            }
            if (sort.value === 'DES_YEAR') {
              return b.year - a.year;
            }
            if (sort.value === false) {
              return a.id - b.id;
            }
          }
        })
        .map(model => (
          <div
            key={model.id}
            className='flex justify-between items-center flex-col gap-[14px] lg:gap-[8px] hover:cursor-pointer group'
            onClick={() => handleNavigation(model.id)}
          >
            <h3 className='text-center leading-[30px] text-[28px] tracking-[-0.65px] font-semibold group-hover:text-[#EB0A1E]'>
              {model.name}
            </h3>
            <span className='Text-Style'>
              {model.year} |{' '}
              {model.price.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
                maximumFractionDigits: 0,
              })}
              {/* Parse number to local price format  */}
            </span>
            <div className='relative w-[100%] h-[130px] m-auto lg:h-[132px] '>
              {/* Responsive image  */}
              <Image
                src={model.thumbnail}
                alt={model.name}
                layout='fill'
                className='object-contain object-center'
              />
            </div>
            <button className='rounded-[40px] bg-[#191919] text-[white] w-[152px] h-[34px] mx-auto invisible group-hover:visible'>
              Ver Modelo
            </button>
          </div>
        ))}
    </div>
  );
};

export default ModelsGrid;
