import * as question from '../index.js';

const task = 'What number is missing in the progression?';

const getAnswerAndQUestion = () => {
  const randomNum1 = question.randomNum(10);
  const randomNum2 = question.randomNum(10);

  const minLengthArr = 5;
  const maxLengthArr = 11;
  const randomLengthArr = Math.floor(Math.random() * (maxLengthArr - minLengthArr) + minLengthArr);

  const arr = [];
  arr[0] = randomNum1;

  for (let index = 1; index < randomLengthArr; index += 1) {
    arr.push(arr[index - 1] + randomNum2);
  }

  const randomIndexElement = question.randomNum(randomLengthArr - 1);
  const correctAnswer = String(arr[randomIndexElement - 1]);
  arr[randomIndexElement - 1] = '..';

  const stepQuestion = `${arr.join(' ')}`;
  return [stepQuestion, correctAnswer];
};

const runBrainProgression = () => question.runGame(task, getAnswerAndQUestion);

export default runBrainProgression;
