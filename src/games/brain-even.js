import * as question from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswerAndQUestion = () => {
  const stepQuestion = question.randomNum(1000);
  const correctAnswer = stepQuestion % 2 === 0 ? 'yes' : 'no';
  return [stepQuestion, correctAnswer];
};

const runBrainEven = () => question.runGame(task, getAnswerAndQUestion);

export default runBrainEven;
