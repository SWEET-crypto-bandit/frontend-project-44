import readlineSync from "readline-sync";
const start = (rules, tool, prav) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name?");
  console.log(`Hello, ${name}!`);
  console.log(prav); // Для красоты по базе

  for (let j = 0; j < 3; j++) {
    let i = tool();
    const questio = readlineSync.question(`Question: ${i}`);
    console.log(`Your answer: ${questio}`);

    if (questio === rules(i)) {
      // модуль проверки ответа
      console.log("Correct!");
    } else {
      console.log(
        `'${questio}' is wrong answer ;(. Correct answer was '${rules(i)}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    } //
  }
  console.log(`Congratulations, ${name}!`);
};

export default start;
