import * as question from '../index.js';

const task = 'What is the result of the expression?';

const correctOfOperation = (r1, r2, operation) => {
  if (operation === '+') {
    return r1 + r2;
  }
  if (operation === '-') {
    return r1 - r2;
  }
  return r1 * r2;
};

const getAnswerAndQUestion = () => {
  const randomNum1 = question.randomNum(20);
  const randomNum2 = question.randomNum(20);
  const randomOperation = question.randomElement(['*', '+', '-']);
  const stepQuestion = `${randomNum1} ${randomOperation} ${randomNum2}`;
  const correctAnswer = String(correctOfOperation(randomNum1, randomNum2, randomOperation));
  return [stepQuestion, correctAnswer];
};

const runBrainCalc = () => question.runGame(task, getAnswerAndQUestion);

export default runBrainCalc;
