import React, { ButtonHTMLAttributes } from 'react';

// inline DOM type indicating props are attributes for button HTML element
export const Button = ({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  // comes from hovering over <button>
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
