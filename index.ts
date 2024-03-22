#! /usr/bin/env node
import inquirer from "inquirer"

const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);

console.log(answer);


if (answer.userGuessedNumber === randomnumber) {
    console.log("Congratulations you guessed right number");
} else {
    console.log("You guessed wrong number");
}
