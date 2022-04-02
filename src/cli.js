import readlineSync from 'readline-sync';

const nameUser = () => {
  const writeName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${writeName}!`);
};

export default nameUser;
