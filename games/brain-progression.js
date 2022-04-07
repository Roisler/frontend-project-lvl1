#!/usr/bin/env node
import * as question from '../src/index.js';

question.hello();
const nameUser = question.nameUser();

console.log('What number is missing in the progression?');
for (let i = 0; i < 3; i += 1) {
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
  const correctAnswer = arr[randomIndexElement - 1];
  arr[randomIndexElement - 1] = '..';

  const stepQuestion = `${arr.join(' ')}`;
  const newAnswer = question.newAnswer(stepQuestion);

  if (Number(newAnswer) === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${newAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${nameUser}!`);
    break;
  }
  if (i === 2 && Number(newAnswer) === correctAnswer) {
    console.log(`Congratulations, ${nameUser}!`);
  }
}
