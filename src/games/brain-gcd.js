import * as question from '../index.js';

const task = 'Find the greatest common divisor of given numbers';

const getGreatestCommonDivisor = (num1, num2) => {
  let i;
  for (i = Math.min(num1, num2); i >= 1; i -= 1) {
    if (i === 1) {
      return i;
    }
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }
  return i;
};

const getAnswerAndQUestion = () => {
  const randomNum1 = question.randomNum(20);
  const randomNum2 = question.randomNum(20);

  const stepQuestion = `${randomNum1} ${randomNum2}`;
  const correctAnswer = String(getGreatestCommonDivisor(randomNum1, randomNum2));
  return [stepQuestion, correctAnswer];
};

const runBrainGcd = () => question.runGame(task, getAnswerAndQUestion);

export default runBrainGcd;
