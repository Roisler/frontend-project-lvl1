import launch from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const task = 'Find the greatest common divisor of given numbers';

const getGreatestCommonDivisor = (a, b) => {
  if (b !== 0) {
    return getGreatestCommonDivisor(b, a % b);
  }
  return a;
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomIntInclusive(1, 20);
  const secondNumber = getRandomIntInclusive(1, 20);

  const stepQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));
  return [stepQuestion, correctAnswer];
};

const runBrainGcd = () => launch(task, getAnswerAndQuestion);

export default runBrainGcd;
