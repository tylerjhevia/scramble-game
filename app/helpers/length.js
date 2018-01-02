export const chooseWordLength = (desiredLength, allWords) => {
  return allWords.filter(word => word.length === desiredLength);
};
