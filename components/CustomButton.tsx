'use client';

import { CustomButtonProps } from '@types';
import Image from 'next/image';

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  btnType,
  handleClick,
  icon,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {icon && (
        <div className='relative w-6 h-6'>
          <Image src={icon} alt='Right Arrow' fill className='object-contain' />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
