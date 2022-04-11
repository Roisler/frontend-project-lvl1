import launch from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const maxNumberCheck = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= maxNumberCheck; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQUestion = () => {
  const stepQuestion = getRandomIntInclusive(0, 100);
  const correctAnswer = isPrime(stepQuestion) ? 'yes' : 'no';
  return [stepQuestion, correctAnswer];
};

const runBrainPrime = () => launch(task, getAnswerAndQUestion);

export default runBrainPrime;
