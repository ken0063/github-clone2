import React from 'react';
import { ButtonProps } from '../../types';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({
  type,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={`button ${className == null ? '' : className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
