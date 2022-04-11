import readlineSync from 'readline-sync';

export default (task, getAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(task);
  const countOfRound = 3;
  for (let round = 0; round < countOfRound; round += 1) {
    const [stepQuestion, correctAnswer] = getAnswerAndQuestion();
    console.log(`Question: ${stepQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};
