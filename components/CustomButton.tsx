'use client';

import { CustomButtonProps } from '@types';

const CustomButton = ({
  title,
  containerClasses,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      className={`custom-btn ${containerClasses}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
