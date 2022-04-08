import readlineSync from 'readline-sync';

export const runGame = (task, getAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(task);
  for (let rounds = 0; rounds < 3; rounds += 1) {
    const [stepQuestion, correctAnswer] = getAnswerAndQuestion();
    const answer = readlineSync.question(`Question: ${stepQuestion}\nYour answer: `);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export const randomNum = (max) => Math.floor(Math.random() * max) + 1;

export const randomElement = (arr) => {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
};
