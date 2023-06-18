import React from 'react';

interface Props {
  className: string;
}

// React.FC's type definition (if you cmd+click on it) indicates by default its props object is empty
// This won't work -> export const Button: React.FC = (props: Props)
// This will work -> export const Button: React.FC<Props> = (props)

/* @ts-expect-error */
export const Button: React.FC<Props> = (props: Props) => {
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
