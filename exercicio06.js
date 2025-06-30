const prompt = require('prompt-sync')();

let num;

do{
    num = parseInt(prompt("Digite a quantidade de termos para a sequência de Fibonacci: "));
} while (num < 0 || isNaN(num));

function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    else if (n === 1) {
        return 0;
    }
    else if (n === 2) {
        return [0, 1];
    }
    else {
        let tAnterior = fibonacci(n - 1);

        let pTermo = tAnterior[tAnterior.length - 1] + tAnterior[tAnterior.length - 2];

        tAnterior.push(pTermo);

        return tAnterior;
    }
}

console.log("Os termos pedidos de Fibonacci são:", fibonacci(num));
