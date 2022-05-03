import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      src='/logo.svg'
      alt='Logo Agencia EGO'
      width={38}
      height={39}
      className='cursor-pointer'
    />
  );
};

export default Logo;
