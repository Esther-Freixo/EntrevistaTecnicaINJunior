const prompt = require('prompt-sync')();

let numArr = [];
let consecNum = 0;

const arrSize  = parseInt(prompt("Digite o tamanho do array: "));

for (let i = 0; i < arrSize; i++)
{
    const num = parseInt(prompt(`Número na posição ${i}: `));
    numArr[i] = num;
}

for (let j = 0; j < arrSize; j++)
{
    if (numArr[j] < numArr[j+1])
    {
        consecNum++;
    }
}

console.log(consecNum);

