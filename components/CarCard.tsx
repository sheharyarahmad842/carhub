'use client';

import React, { useState } from 'react';
import { CarProps } from '@types';
import { calculateCarRent, generateCarImageUrl } from '@utils';
import Image from 'next/image';
import { CustomButton, CarDetails } from '@components';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col justify-start items-start gap-5 bg-primary-blue-100 text-gray-900 rounded-lg p-4 hover:bg-white hover:shadow-lg'>
      <h2 className='font-bold text-[26px] capitalize'>
        {car.make} {car.model}
      </h2>
      <p className='flex text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>
          /day
        </span>
      </p>
      <div className='relative w-full h-40 object-contain my-6'>
        <Image
          src={generateCarImageUrl(car)}
          alt='Car'
          fill
          priority
          className='object-contain'
        />
      </div>
      <div className='relative w-full mt-2 flex group'>
        <div className='flex justify-between items-center gap-4 group-hover:invisible w-full'>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <Image
              src='steering-wheel.svg'
              alt='Steering Wheel'
              width={30}
              height={30}
              className='object-contain'
            />
            <p className='text-gray-600 text-base'>
              {car.transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <Image
              src='tire.svg'
              alt='Tire'
              width={30}
              height={30}
              className='object-contain'
            />
            <p className='text-gray-600 text-base uppercase'>{car.drive}</p>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <Image
              src='gas.svg'
              alt='Gas'
              width={30}
              height={30}
              className='object-contain'
            />
            <p className='text-gray-600 text-base'>{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className='w-full hidden group-hover:flex absolute z-10 bottom-0'>
          <CustomButton
            title='View More'
            btnType='button'
            containerStyles='w-full bg-primary-blue rounded-full py-[16px]'
            textStyles='text-white font-bold text-base'
            icon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};
export default CarCard;
