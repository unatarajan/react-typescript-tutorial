import { ComponentProps } from 'react';
import { Equal, Expect } from '../helpers/type-utils';

// intersection = input HTML element props + obj with onChange handler which is a function type that takes a string arg (typically an event, i.e. "focus", "blur", "type", etc.) and returns nothing
// onChange typically receives an event object; but you want to override this and pass in a value.

type ModifiedComponentProps = Omit<ComponentProps<'input'>, 'onChange'>;

type InputProps = ModifiedComponentProps & {
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = (props): JSX.Element => {
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

// Solution 3 using an interface is most elegant.
// Cannot use utility type Exclude b/c ComponentProps<'input'> is not a union type.
