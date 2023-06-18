import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  // onClick: React.MouseEventHandler; // use this declaration if you don't want to specify which HTML element the onClick will be on, making the onClick handler more generally available
  // Better to grab from hovering over the onClick in the button element
  // HTMLButtonElement is from the DOM types, which are globally available (no need to install / import)
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // it's HTMLButtonElement b/c the onClick is on a button, not say HTMLDivElement
}

// destructured props on left, type / interface the props obj is supposed to match in data shape on the right
export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
