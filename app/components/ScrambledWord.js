import React from 'react';

export const ScrambledWord = props => {
  const { word } = props;
  return (
    <p className="scrambled-word">
      {word}
    </p>
  );
};
