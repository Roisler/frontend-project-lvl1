import readlineSync from "readline-sync";

export const nameUser = () => {
  const writeName = readlineSync.question("May I have your name? ");
  console.log(`${"Hello,"} ${writeName}!`);
};
