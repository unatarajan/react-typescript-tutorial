import { useState } from 'react';

export const Tags: React.FC = (): JSX.Element => {
  const [tags, setTags] = useState<{ id: number; value: string }[]>([]);
  // const [tags, setTags] = useState<Array<{ id: number; value: string }>>([]);
  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: 'New',
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
