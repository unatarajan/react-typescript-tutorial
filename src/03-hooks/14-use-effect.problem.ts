import { useEffect } from 'react';
// useEffect is a rare hook in React in that it isn't generic

// See https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#useeffect--uselayouteffect
// setTimeout returns a timerId (number).
// useEffect should not return anything other than a function or undefined. Wrapping the setTimeout in braces means we're NOT returning the result of invoking setTimeout.
// B/c useEffect doesn't return values, no types are necessary.

export const useTimeout = ({ timerMs }: { timerMs: number }): void => {
  useEffect(
    () => {
      setTimeout(() => {
        console.log('Done!');
      }, timerMs);
    },
    [timerMs] // dependency array indicating that useEffect is triggered whenever timerMs changes
  );
};
