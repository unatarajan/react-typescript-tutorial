import React from 'react';

interface Props {
  className: string;
}

// Either JSX.Element or React.FC solve this problem. However, it's more accurate to say:
// export const Button: React.FC<Props> = (props): JSX.Element
// than the below, which was your original answer. Button is a functional component that returns out a JSX Element.

/* @ts-expect-error */
export const Button: JSX.Element<Props> = (props): JSX.Element => {
  return {
    ohDear: '123',
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
