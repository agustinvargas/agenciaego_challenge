import React from 'react';
import { menuItems } from '../../utils/contents/menuItems';
import Close from '../Icons/Close';
const MenuOffcanvas = ({ handleMenu }) => {
  return (
    <div
      id='menu-offcanvas'
      className='bg-[black] hidden h-screen w-[100%] lg:fixed lg:top-0 lg:left-0 z-50'
    >
      <div className='pt-[20px] h-screen w-[100%] overflow-auto bg-[white] lg:w-[390px] absolute top-0 right-0 z-50'>
        <div
          onClick={handleMenu}
          className='flex justify-end items-center gap-[11px] px-[27px]'
        >
          Cerrar
          <Close />
        </div>
        <nav className='pt-[39px]'>
          <ul className='flex flex-col items-end gap-[11px] px-[53px]'>
            <li className='text-[20px] tracking-[-1px]'>Modelos</li>
            <li className='text-[20px] tracking-[-1px]'>Financiación</li>
            <li className='text-[20px] tracking-[-1px]'>Reviews y Comunidad</li>
          </ul>
          <div className='my-[31px] border-b-solid border-b-[#e9e9e9] border-b-[1px] w-[338px] mx-auto' />
          <ul className='flex flex-col items-end gap-[11px] px-[53px]'>
            <li className='text-[20px] tracking-[-1px]'>
              Toyota Mobility Service
            </li>
            <li className='text-[20px] tracking-[-1px]'>Toyota Gazoo Racing</li>
            <li className='text-[20px] tracking-[-1px]'>Toyota Híbridos</li>
          </ul>
          <div className='my-[31px] border-b-solid border-b-[#e9e9e9] border-b-[1px] w-[338px] mx-auto' />
          <ul className='flex flex-col items-end gap-[11px] px-[53px]'>
            <li className='text-[20px] tracking-[-1px]'>Concesionarios</li>
            <li className='text-[20px] tracking-[-1px]'>Test Drive</li>
            <li className='text-[20px] tracking-[-1px]'>Contacto</li>
          </ul>
          <div className='mt-[31px] bg-[#efeeef] pt-[31.8px] pb-[53.3px]'>
            <ul className='flex flex-col items-end gap-[11px] px-[53px]'>
              <li className='text-[20px] tracking-[-1px]'>Actividades</li>
              <li className='text-[20px] tracking-[-1px]'>
                Servicios al Cliente
              </li>
              <li className='text-[20px] tracking-[-1px]'>Ventas especiales</li>
              <li className='text-[20px] tracking-[-1px]'>Innovación</li>
              <li className='text-[20px] tracking-[-1px]'>Prensa</li>
              <li className='text-[20px] tracking-[-1px]'>Acerca de...</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuOffcanvas;
