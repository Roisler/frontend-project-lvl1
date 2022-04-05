import readlineSync from 'readline-sync';

export const hello = () => console.log('Welcome to the Brain Games!');
export const nameUser = () => {
  const writeName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${writeName}!`);
  return writeName;
};

export const newAnswer = (mainQuestion) => {
  const answer = readlineSync.question(`Question: ${mainQuestion}\nYour answer: `);
  return (Number(answer));
};
export const randomNum = () => Math.floor(Math.random() * 20) + 1;
export const randomElement = (arr) => {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
};
