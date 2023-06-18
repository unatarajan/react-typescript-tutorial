import React from 'react';

// destructuring props on left, and the props obj on left should match empty object type on right
// spreading out properties in rest obj into props obj

// See https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring-a-html-element

// YOUR (verbose) SOLUTION using type helper ComponentProps:
export interface ButtonProps extends React.ComponentProps<'button'> {
  attrProp?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type=""></Button>;
  // ctrl + space into type value = shows all button types in autocomplete
  // ctrl + space in <Button> = shows all button attributes in autocomplete
};

// His solutions are more elegant and readable. Solution 1 using type helper is recommended.
