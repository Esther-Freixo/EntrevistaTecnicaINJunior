const prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase para saber se ela é um palíndromo: ");
let fraseProcessada = frase.toLowerCase().replace(/\s+/g, '').split('');
let fraseInvertida = '';

for (let i = fraseProcessada.length - 1; i >= 0 ; i--)
{
    fraseInvertida += fraseProcessada[i];
}

if(fraseProcessada.join('') === fraseInvertida){
    console.log("A frase é um palíndromo");
} else {
    console.log("A frase não é um palíndromo");
}

