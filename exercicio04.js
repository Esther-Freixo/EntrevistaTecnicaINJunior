const prompt = require('prompt-sync')();

const valReal = parseInt(prompt("Digite o valor em real que deseja converter: "));

const cambioUSA = 5.70;
const cambioEuro= 6.10;

const convUsa = valReal * cambioUSA;
const convEuro = valReal * cambioEuro;

console.log(`Valor que se deseja converter: R$${valReal.toFixed(2)}`);
console.log(`Valor convertido em Dólar: $${convUsa.toFixed(2)}`);
console.log(`Valor convertido em Euro: €${convEuro.toFixed(2)}`);
