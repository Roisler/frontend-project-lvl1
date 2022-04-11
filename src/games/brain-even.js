import launch from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const even = (num % 2 === 0) ? 'yes' : 'no';
  return even;
};

const getAnswerAndQuestion = () => {
  const stepQuestion = getRandomIntInclusive(0, 1000);
  const correctAnswer = isEven(stepQuestion);
  return [stepQuestion, correctAnswer];
};

const runBrainEven = () => launch(task, getAnswerAndQuestion);

export default runBrainEven;
