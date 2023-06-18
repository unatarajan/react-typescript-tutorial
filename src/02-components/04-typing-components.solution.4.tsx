import React from 'react';

// very common approach in codebases:
// you can read { className }: { className: string } AS props: { className: string }
// { className } is destructuring className from the props object, i.e. const { className } = props;
// { className: string } is the type definition for the associated value for className

export const Button = ({ className }: { className: string }) => {
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
