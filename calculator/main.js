#! /usr/bin/env node
import { sum } from "./add.js";
import inquirer from "inquirer";
import { Sub } from "./sub.js";
import { multi } from "./mutli.js";
import { div } from "./div.js";
let answer = await inquirer.prompt([
    {
        name: "num1",
        message: "Enter first number",
        type: "number",
    },
    {
        name: "num2",
        message: "Enter second number",
        type: "number",
    },
    {
        name: 'operation',
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: "Using the arrow keys, select from the list below",
    }
]);
if (answer.operation === "+") {
    let result = sum(answer.num1, answer.num2);
    console.log("Your answer is: ", result);
}
else if (answer.operation === "-") {
    let result = Sub(answer.num1, answer.num2);
    console.log("Your answer is: ", result);
}
else if (answer.operation === "*") {
    let result = multi(answer.num1, answer.num2);
    console.log("Your answer is: ", result);
}
else if (answer.operation === "/") {
    let result = div(answer.num1, answer.num2);
    console.log("Your answer is: ", result);
}
