import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '@components';

const Navbar = () => {
  return (
    <header className='absolute z-10 w-full'>
      <nav className='flex-between max-w-[1440px] mx-auto padding-x padding-y bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>

        <CustomButton
          title='Sign In'
          btnType='button'
          containerClasses='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </header>
  );
};

export default Navbar;
