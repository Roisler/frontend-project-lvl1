/* eslint-disable import/prefer-default-export */

export const getRandomIntInclusive = (minOfRange, maxOfRange) => {
  const min = Math.ceil(minOfRange);
  const max = Math.floor(maxOfRange);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
