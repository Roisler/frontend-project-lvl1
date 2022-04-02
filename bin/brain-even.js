#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const writeName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${writeName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const newAnswer = readlineSync.question(`Question: ${randomNum}\nYour Answer: `);
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  if (newAnswer !== correctAnswer) {
    console.log(`'${newAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${writeName}!`);
    break;
  } else {
    console.log('Correct!');
  }
  if (i === 2 && newAnswer === correctAnswer) {
    console.log(`Congratulations, ${writeName}!`);
  }
}
