import React from 'react';

interface IText {
  text: string,
}

function Test({text} : IText) {
  return (
    <p>{text}</p>
  );
}

export default Test;
