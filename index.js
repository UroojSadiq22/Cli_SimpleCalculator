#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "FirstNumber",
        message: "Enter the first number",
        type: "number",
    },
    {
        name: "SecondNumber",
        message: "Enter the second number",
        type: "number",
    },
    {
        name: "operator",
        message: "Select one of the operation to perform operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    let sum = answer.FirstNumber + answer.SecondNumber;
    console.log(`Your answer is ${sum}`);
}
else if (answer.operator === "subtraction") {
    let subtract = answer.FirstNumber - answer.SecondNumber;
    console.log(`Your answer is ${subtract}`);
}
else if (answer.operator === "multiplication") {
    let multiply = answer.FirstNumber * answer.SecondNumber;
    console.log(`Your answer is ${multiply}`);
}
else if (answer.operator === "division") {
    let divide = answer.FirstNumber / answer.SecondNumber;
    console.log(`Your answer is ${divide}`);
}
