import React, { ComponentProps } from 'react';

// inline React type indicating props are component props for a button element (in HTML)
export const Button = ({ className, ...rest }: ComponentProps<'button'>) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
