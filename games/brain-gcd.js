#!/usr/bin/env node
import * as question from '../src/index.js';

question.hello();
const nameUser = question.nameUser();

console.log('Find the greatest common divisor of given numbers');
for (let i = 0; i < 3; i += 1) {
  const randomNum1 = question.randomNum(20);
  const randomNum2 = question.randomNum(20);

  const stepQuestion = `${randomNum1} ${randomNum2}`;
  const newAnswer = question.newAnswer(stepQuestion);

  const correctAnswer = (num1, num2) => {
    let index;
    for (index = Math.min(num1, num2); index >= 1; index -= 1) {
      if (index === 1) {
        return index;
      }
      if ((num1 % index === 0) && (num2 % index === 0)) {
        return index;
      }
    }
    return index;
  };

  if (Number(newAnswer) === correctAnswer(randomNum1, randomNum2)) {
    console.log('Correct!');
  } else {
    console.log(`'${newAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(randomNum1, randomNum2)}'`);
    console.log(`Let's try again, ${nameUser}!`);
    break;
  }
  if (i === 2 && Number(newAnswer) === correctAnswer(randomNum1, randomNum2)) {
    console.log(`Congratulations, ${nameUser}!`);
  }
}
