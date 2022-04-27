import React, { useState } from 'react';
import { MenuHamb } from '../Icons/MenuHamb';
import Logo from '../Logo/Logo';
import MenuOffcanvas from '../MenuOffcanvas/MenuOffcanvas';

const Header = () => {
  const [openOffCanvas, setOpenOffCanvas] = useState(false);

  const handleMenu = () => {
    setOpenOffCanvas(!openOffCanvas);
    // document.querySelector('#__next')?.classList?.toggle('backdrop-blur-xl');
  };

  return (
    <>
      <header className='flex flex-row justify-between items-center p-[16px] lg:px-[35px] lg:py-[16px] h-[70px] border-b-[1px] border-[#d8d8d8] border-solid'>
        <Logo />
        <MenuHamb handleMenu={handleMenu} />
      </header>
      {openOffCanvas && <MenuOffcanvas handleMenu={handleMenu} />}
    </>
  );
};

export default Header;
