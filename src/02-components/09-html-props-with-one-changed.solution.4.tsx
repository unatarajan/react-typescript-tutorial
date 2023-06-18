import { ComponentProps } from 'react';
import { Equal, Expect } from '../helpers/type-utils';

// creating a re-usable type helper called OverrideProps, which takes in 2 type args: a generic and an override for the generic
// see https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#props-omit-prop-from-a-type

type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

type InputProps = OverrideProps<
  ComponentProps<'input'>,
  {
    onChange: (value: string) => void;
  }
>;

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
