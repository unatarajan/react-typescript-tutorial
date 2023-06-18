export const Component = (): JSX.Element => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      // See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset
      aria-posinset={1}
      // Following is a reqd attr if using aria-posinset. If total set size is unknown, assign -1.
      // aria-setsize={-1}
      // How do I figure out what type onChange expects?
      onChange={(e) => {}}
      // How do I get autocomplete with JSX?
    />
  );
};
