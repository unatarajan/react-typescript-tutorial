import { useState } from 'react';

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
  // THIS DIDN'T SOLVE THE ISSUE. See https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks. You did the opposite of the exercise. You're allowing excess properties to be added to state. We want to trigger the TS errors when we add excess properties.
  // [stateProp: string]: any;
}

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              // instead of passing just the result to setState, we're passing a function so we update the latest version of currentState. See https://youtu.be/Wtd-HJH5bM4.
              setState(
                (currentState): TagState => ({
                  ...currentState,
                  // @ts-expect-error
                  tagselected: tag.id,
                  // tagselected: tag.id as tagSelected, // use a type assertion if the lowercase "s" is indeed a typo
                })
              );
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState(
            (currentState): TagState => ({
              ...currentState,
              tags: [
                ...currentState.tags,
                {
                  id: new Date().getTime(),
                  value: 'New',
                  // @ts-expect-error
                  otherValue: 'something',
                },
              ],
            })
          );
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

// -----------

// TS doesn't care about excess props passed to objs.

// THIS WILL ERROR. TS is checking if an object matches an object type, and it doesn't.

// const tagState: TagState = {
//   tagSelected: 2,
//   tags: [],
//   extra: 'whatever',
// };

// THIS WILL NOT. TS is checking if a function matches a function type, and it does. That we're passing excess properties in the returned object is allowed.

type GetTagState = () => TagState;

const getTagState: GetTagState = () => ({
  tagSelected: 2,
  tags: [],
  extra: 'whatever',
});

// IN ORDER TO GET THE FUNCTION RETURN VALUE TO ERROR, you need to type it. However, this is not a good solution. BEST PRACTICE is to make TS do object comparisons rather than function comparisons so you receive better errors.

// -----------
