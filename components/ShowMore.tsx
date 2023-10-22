'use client';

import React from 'react';
import { ShowMoreProps } from '@types';
import { CustomButton } from '@components';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleClick = () => {
    setLimit(`${(pageNumber + 1) * 10}`);
  };
  return (
    isNext && (
      <CustomButton
        btnType='button'
        title='Show More'
        containerStyles='bg-primary-blue rounded-full'
        textStyles='text-white text-lg font-semibold'
        handleClick={handleClick}
      />
    )
  );
};

export default ShowMore;
