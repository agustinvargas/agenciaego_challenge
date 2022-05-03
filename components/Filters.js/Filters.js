import React from 'react';
import Select from 'react-select';
import DropdownArrow from '../Icons/Dropdown';

const Filters = ({ setFilter, setSort, models }) => {
  const segments = [...new Set(models.map(model => model.segment))]; // Remove duplicates
  const filterOpt = segments.map(segment => ({
    value: segment,
    label: segment,
  })); // Add options from models

  filterOpt.unshift({ value: false, label: 'Todos' }); // Add empty option
  const sortOpt = [
    { value: false, label: 'Nada' },
    {
      value: 'DES_PRICE',
      label: (
        <span>
          De <b>menor</b> a <b>mayor</b> precio
        </span>
      ),
    },
    {
      value: 'ASC_PRICE',
      label: (
        <span>
          De <b>mayor</b> a <b>menor</b> precio
        </span>
      ),
    },
    {
      value: 'ASC_YEAR',
      label: (
        <span>
          Más <b>nuevos</b> primero
        </span>
      ),
    },
    {
      value: 'DES_YEAR',
      label: (
        <span>
          Más <b>viejos</b> primero
        </span>
      ),
    },
  ]; // Add sort options

  const customStyles = (isRtl = false) => ({
    control: provided => ({
      ...provided,
      border: 'none',
      fontFamily: 'Montserrat',
      fontSize: '14px',
      fontWeight: '600',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1',
      letterSpacing: '0.08px',
      color: '#373737',
      flexDirection: isRtl && 'row-reverse',
    }),
    placeholder: provided => {
      return {
        ...provided,
        border: 'none',
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: '600',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '0.08px',
        color: '#373737',
      };
    },
    menu: provided => ({
      ...provided,
      boxShadow: '2px 8px 20px 0 rgba(0, 0, 0, 0.15)',
      width: '170px',
      textAlign: 'left',
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      fontSize: '10px',
      height: '36px',
      lineHeight: '3.5',
      letterSpacing: '-0.1px',
      color: '#191919',
      borderBottom: '1px solid #d8d8d8',
      padding: '0 8px',
      background: isSelected ? 'rgba(209, 214, 214, 0.2)' : '',
    }),
    singleValue: provided => ({
      ...provided,
      overflow: 'unset',
    }),
  });

  const handleSelectFilter = (e, option) => {
    setFilter({ label: option.label, value: option.value });
    for (let i = 0; i < filterOpt.length; i++) {
      // Change background color of all options
      const active = document
        .getElementById('filterOpt')
        .getElementsByClassName('bg-[#F7F7F7]');

      if (active.length > 0) {
        active[0].classList.remove('bg-[#F7F7F7]');
      }
      const firts = document
        .getElementById('filterOpt')
        .getElementsByClassName('first:bg-[#F7F7F7]');
      if (firts.length > 0) {
        firts[0].classList.remove('first:bg-[#F7F7F7]');
      }
    }
    // Add background color to selected option
    e.target.classList.add('bg-[#F7F7F7]');
  };

  return (
    <>
      <div className='flex items-center justify-between mt-[38px] lg:mt-[72px]'>
        {/* open ---- Only SM devices  */}
        <Select
          defaultValue={{ value: filterOpt?.[0].value, label: 'Filtrar por' }}
          onChange={setFilter}
          options={filterOpt}
          isSearchable={false}
          styles={customStyles()}
          components={{
            DropdownIndicator: () => <DropdownArrow />,
            IndicatorSeparator: () => null,
          }}
          className='lg:hidden'
        />
        {/* close ---- SM devices  */}
        {/* open ---- LG devices  */}
        <div className='hidden lg:flex lg:items-center lg:gap-[45px]'>
          <span className='font-semibold text-[14px]'>Filtrar por</span>
          <div>
            <ul id='filterOpt' className='flex items-center gap-[39px]'>
              {filterOpt?.map((option, i) => (
                <li
                  className='first:bg-[#F7F7F7] my-[10px] py-[8px] px-[18px] cursor-pointer text-[14px] hover:bg-[#F7F7F7] rounded-[18px]'
                  onClick={e => handleSelectFilter(e, option)}
                  key={option.value}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* close ---- LG devices  */}
        <Select
          defaultValue={{ value: sortOpt[0].value, label: 'Ordenar por' }}
          onChange={setSort}
          options={sortOpt}
          isRtl
          isSearchable={false}
          styles={customStyles(true)}
          components={{
            DropdownIndicator: () => <DropdownArrow />,
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <div className='h-[1px] my-[14px] mb-[3px] border-solid border-b-[1px] border-b-[#d8d8d8]' />
    </>
  );
};

export default Filters;
