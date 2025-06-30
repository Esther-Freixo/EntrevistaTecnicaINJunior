const prompt = require('prompt-sync')();

let num;

do{
    num = parseInt(prompt("Digite o valor inteiro: "));
} while (num < 0 || isNaN(num));


if (num % 5 === 0 && num % 3 === 0)
{
    console.log("fizzbuzz");
} else if (num % 5 === 0) {
    console.log("buzz");
} else if (num % 3 === 0) {
    console.log("fizz");
};
