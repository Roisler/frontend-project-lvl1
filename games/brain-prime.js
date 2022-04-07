#!/usr/bin/env node
import * as question from '../src/index.js';

question.hello();
const nameUser = question.nameUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNum = question.randomNum(100);
  const stepQuestion = `${randomNum}`;
  const newAnswer = question.newAnswer(stepQuestion);

  const correctAnswer = () => {
    for (let index = 2; index <= Math.sqrt(randomNum); index += 1) {
      if (randomNum % index === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  if (newAnswer === correctAnswer()) {
    console.log('Correct!');
  } else {
    console.log(`'${newAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'`);
    console.log(`Let's try again, ${nameUser}!`);
    break;
  }
  if (i === 2 && newAnswer === correctAnswer()) {
    console.log(`Congratulations, ${nameUser}!`);
  }
}
