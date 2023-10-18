'use client';

import React, { Fragment } from 'react';
import { CarProps } from '@types';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { generateCarImageUrl } from '@utils';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex justify-center items-center min-h-full p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] bg-white rounded-2xl p-6 text-left shadow-xl transition-all overflow-y-auto'>
                <button
                  type='button'
                  className='absolute bg-primary-blue-100 rounded-full flex justify-center items-center p-2 top-2 right-2 z-10 w-fit'
                  onClick={closeModal}
                >
                  <Image
                    src='close.svg'
                    alt='Close'
                    width={20}
                    height={20}
                    className='object-coontain'
                  />
                </button>
                <div className='flex flex-col gap-3'>
                  <div className='object-contain h-40 bg-center bg-pattern relative w-full flex justify-center items-center rounded-lg'>
                    <Image
                      src={generateCarImageUrl(car)}
                      alt='Car'
                      fill
                      className='object-contain'
                    />
                  </div>

                  <div className='flex gap-3'>
                    <div className='flex-1 w-full relative h-24 bg-center bg-primary-blue-100'>
                      <Image
                        src={generateCarImageUrl(car, '29')}
                        alt='Car'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 w-full relative h-24 bg-center bg-primary-blue-100'>
                      <Image
                        src={generateCarImageUrl(car, '33')}
                        alt='Car'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 w-full relative h-24 bg-center bg-primary-blue-100'>
                      <Image
                        src={generateCarImageUrl(car, '13')}
                        alt='Car'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>
                <h2 className='my-6 capitalize font-bold text-[25px]'>
                  {car.make} {car.model}
                </h2>
                <div className='flex flex-col gap-4'>
                  {Object.entries(car).map(([key, value]) => (
                    <div className='flex justify-between items-center w-full'>
                      <h4 className='capitalize text-gray-500'>
                        {key.split('_').join(' ')}
                      </h4>
                      <p className='text-black-100 font-bold text-base'>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
