'use client';

import React from 'react';
import { ShowMoreProps } from '@types';
import { updateSearchParams } from '@utils';
import { useRouter } from 'next/navigation';
import { CustomButton } from '@components';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleClick = () => {
    const newPath = updateSearchParams('limit', String((pageNumber + 1) * 10));
    router.push(newPath);
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
