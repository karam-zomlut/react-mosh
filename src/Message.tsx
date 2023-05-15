import React from 'react';

const Message = () => {
  const name: any = '';
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
};

export default Message;
