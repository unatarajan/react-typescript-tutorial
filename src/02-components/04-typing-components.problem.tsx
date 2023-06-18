// See https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments

import React from 'react';

// 1) Assign object type { className: string } directly to props
// 2) Create an object type
// export type ButtonProps = { className: string }
// 3) Create an interface
// 4) See solution 4 for notes

// good practice to export types / interfaces

export interface ButtonProps {
  className: string;
}

export const Button = (props: ButtonProps) => {
  const { className } = props;
  return <button className={className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
