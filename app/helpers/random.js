export const selectRandomNumber = max => {
  return Math.round(Math.random() * max);
};

export const selectRandomWord = words => {};

export const scrambleWord = word => {
  word = word.split('');
  let max = word.length;

  for (let i = 0; i < word.length; i++) {
    let randomPosition = Math.round(Math.random() * max);
    let current = word[i];
    word[i] = word[randomPosition];
    word[randomPosition] = current;
  }

  return word.join('');
};
