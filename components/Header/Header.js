import React, { useState } from 'react';
import { MenuHamb } from '../Icons/MenuHamb';
import Logo from '../Logo/Logo';
import MenuOffcanvas from '../MenuOffcanvas/MenuOffcanvas';

const Header = () => {
  const [openOffCanvas, setOpenOffCanvas] = useState(false);

  const handleMenu = () => {
    document.querySelector('body').classList.toggle('overflow-hidden');
    document.querySelector('#menu-offcanvas').classList.toggle('hidden');
    setOpenOffCanvas(!openOffCanvas);
  };

  return (
    <header>
      <div
        id='header'
        className='flex flex-row justify-between items-center p-[16px] lg:px-[35px] lg:py-[16px] h-[70px] border-b-[1px] border-[#d8d8d8] border-solid'
      >
        <Logo />
        <MenuHamb handleMenu={handleMenu} />
      </div>
      <MenuOffcanvas handleMenu={handleMenu} />
      {/* By default, is showed in DOM (SEO)  */}
    </header>
  );
};

export default Header;
