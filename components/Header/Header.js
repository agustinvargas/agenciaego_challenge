import React, { useEffect, useState } from 'react';
import { MenuHamb } from '../Icons/MenuHamb';
import Logo from '../Logo/Logo';
import MenuOffcanvas from '../MenuOffcanvas/MenuOffcanvas';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const [openOffCanvas, setOpenOffCanvas] = useState(false);
  const { pathname } = useRouter();

  const handleMenu = () => {
    document.querySelector('body').classList.toggle('overflow-hidden');
    document.querySelector('#menu-offcanvas').classList.toggle('hidden');
    setOpenOffCanvas(!openOffCanvas);
  };

  return (
    <header id='header'>
      <div className='flex flex-row justify-between items-center h-[70px] lg:px-[35px] px-[15px] border-b-[1px] border-[#d8d8d8] border-solid'>
        <div className='flex items-center gap-[77.46px]'>
          <Logo />
          <nav className='hidden lg:inline-block cursor-pointer'>
            <ul className='flex gap-[40.63px]'>
              <li
                className={`${
                  pathname === '/modelos' &&
                  'border-b-[red] border-b-[4px] text-[#D0021B]'
                } block text-center font-semibold py-[22px]`}
              >
                <Link href='/modelos'>
                  <a className='px-[32px]'>Modelos</a>
                </Link>
              </li>
              <li
                className={`${
                  pathname !== '/modelos'
                    ? 'border-b-[red] border-b-[4px] text-[#D0021B]'
                    : 'hidden'
                } block text-center font-semibold border-b-[red] border-b-[4px] py-[22px] min-qw-[126px]`}
              >
                <span className='px-[32px]'>Ficha de modelo</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center gap-[12px]'>
          <span className='hidden md:inline-block text-[14px]'>Menú</span>
          <MenuHamb handleMenu={handleMenu} />
        </div>
      </div>
      <MenuOffcanvas handleMenu={handleMenu} openOffCanvas={openOffCanvas} />
      {/* By default, is showed in DOM (SEO)  */}
    </header>
  );
};

export default Header;
