import React from 'react';
import { scrambleWord } from '../helpers/random';

export const ScrambledWord = props => {
  const { word } = props;
  let scrambled = scrambleWord(word);
  return (
    <p className="scrambled-word">
      {scrambled}
    </p>
  );
};
