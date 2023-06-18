import React, { ReactNode } from 'react';

// SOLUTION: Create a new type
// See https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/#types-or-interfaces: "consider using type for your React Component Props and State, for consistency and because it is more constrained.")
// See https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#typing-children: you can dictate children's structure, but not the child components themselves.

type ButtonProps = {
  // children: string;
  // See https://react-typescript-cheatsheet.netlify.app/docs/react-types/reactnode/
  children: ReactNode; // kind of like a helper type, represents anything that React can render
  // React.ReactChild is deprecated
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button> {/* Spaces or newlines are considered children! */}
      <Button>Hello world!</Button>
    </>
  );
};
