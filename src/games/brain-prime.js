import * as question from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let index = 2; index <= Math.sqrt(number); index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQUestion = () => {
  const stepQuestion = question.randomNum(100);
  const correctAnswer = isPrime(stepQuestion) ? 'yes' : 'no';
  return [stepQuestion, correctAnswer];
};

const runBrainPrime = () => question.runGame(task, getAnswerAndQUestion);

export default runBrainPrime;
