#!/usr/bin/env node
import * as question from '../src/index.js';

question.hello();

const nameUser = question.nameUser();

console.log(`Hello, ${nameUser}!`);
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const randomNum1 = question.randomNum();
  const randomNum2 = question.randomNum();
  const randomOperation = question.randomElement(['*', '+', '-']);
  const stepQuestion = `Question: ${randomNum1} ${randomOperation} ${randomNum2}\nYour Answer: `;
  const newAnswer = question.newAnswer(stepQuestion);

  const correctOfOperation = (r1, r2, operation) => {
    if (operation === '+') {
      return r1 + r2;
    }
    if (operation === '-') {
      return r1 - r2;
    }
    return r1 * r2;
  };

  const correctAnswer = correctOfOperation(randomNum1, randomNum2, randomOperation);

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
