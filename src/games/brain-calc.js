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
  const operation = ['*', '+', '-'];
  const randomOperation = operation[getRandomIntInclusive(0, operation.length - 1)];
  const stepQuestion = `${firstNumber} ${randomOperation} ${secondNumber}`;
  const correctAnswer = String(getCorrectResult(firstNumber, secondNumber, randomOperation));
  return [stepQuestion, correctAnswer];
};

const runBrainCalc = () => launch(task, getAnswerAndQuestion);

export default runBrainCalc;
