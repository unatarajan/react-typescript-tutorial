import { useEffect, useState } from 'react';
import { Equal, Expect } from '../helpers/type-utils';

interface Data {
  id: number;
  name: string;
}

const fetchData = () => {
  return Promise.resolve({ id: 1, name: 'John' });
};

export const Component = () => {
  // see https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#usestate
  // using a type assertion to cast {} as this union type; this use case is for when we have no initial state but will initialize state soon after hook is declared
  // const [data, setData] = useState({} as Data | undefined);
  // const [data, setData] = useState<Data | undefined>();
  // useState allows function overloads, like the following, which allow you to pass an initial state or not
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []); // empty dependencies array indicates that useEffect only runs on Component mount

  type test = [Expect<Equal<typeof data, Data | undefined>>];
};
