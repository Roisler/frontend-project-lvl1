import launch from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const task = 'What is the result of the expression?';

const getCorrectResult = (firstNum, secondNum, operation) => {
  if (operation === '+') {
    return firstNum + secondNum;
  }
  if (operation === '-') {
    return firstNum - secondNum;
  }
  return firstNum * secondNum;
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomIntInclusive(0, 20);
  const secondNumber = getRandomIntInclusive(0, 20);
  const operations = ['*', '+', '-'];
  const operation = operations[getRandomIntInclusive(0, operations.length - 1)];
  const stepQuestion = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = String(getCorrectResult(firstNumber, secondNumber, operation));
  return [stepQuestion, correctAnswer];
};

const runBrainCalc = () => launch(task, getAnswerAndQuestion);

export default runBrainCalc;
