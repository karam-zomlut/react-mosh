import React, { useState } from 'react';
import Button from '../Button';

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [expand, setExpand] = useState(false);
  const handleClick = () => setExpand((prev) => !prev);

  if (children.length <= maxChars) return <p>{children}</p>
  const visibleText = expand
    ? children
    : children.substring(0, maxChars).concat('...');

  return (
    <p>
      {visibleText} {' '}
      <Button onClick={handleClick}>{expand ? 'Less' : 'More'}</Button>
    </p>
  );
};

export default ExpandableText;
