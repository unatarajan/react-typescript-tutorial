// Imagine NavBar is an external library!

export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) => {
  return <div>Some content</div>;
};

// Your app:

import { Equal, Expect } from '../helpers/type-utils';
import React, { ComponentProps } from 'react';

// See https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#props-extracting-prop-types-of-a-component

// ComponentProps can take 1 of 2 args: HTML element as a string OR an existing component prefixed with typeof
// <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>
// JSX.IntrinsicElements = HTML options
// JSXElementConstructor = class or function that returns JSX (in this case, an imported component)
type NavBarProps = ComponentProps<typeof NavBar>;

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;
