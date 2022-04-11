import launch from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const task = 'What number is missing in the progression?';

const createNewProgression = () => {
  const firstNumber = getRandomIntInclusive(0, 10);
  const stepProgression = getRandomIntInclusive(1, 10);

  const minLengthArr = 5;
  const maxLengthArr = 11;
  const randomLengthArr = getRandomIntInclusive(minLengthArr, maxLengthArr);

  const arr = [];
  arr[0] = firstNumber;

  for (let i = 1; i < randomLengthArr; i += 1) {
    arr.push(arr[i - 1] + stepProgression);
  }
  return arr;
};

const getAnswerAndQuestion = () => {
  const newArray = createNewProgression();
  const hideIndex = getRandomIntInclusive(0, newArray.length - 1);
  const correctAnswer = String(newArray[hideIndex]);
  newArray[hideIndex] = '..';

  const stepQuestion = newArray.join(' ');
  return [stepQuestion, correctAnswer];
};

const runBrainProgression = () => launch(task, getAnswerAndQuestion);

export default runBrainProgression;
