import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <Image src='/logo.svg' alt='Logo Agencia EGO' width={38} height={39} />
  );
};

export default Logo;
