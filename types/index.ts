import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerClasses?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}
