const prompt = require('prompt-sync')();

let repetir = 's';

const calcFat = (numero) => {
    if (numero > 1) {
        return numero * calcFat(numero - 1);
    }
    else return 1;
}

while (repetir === 's' || repetir === 'S') {
    const num = parseInt(prompt("Digite um numero inteiro e positivo: "));

    if (num < 0 || isNaN(num)) {
        console.log("Número inválido, não foi possivel realizar o cálculo!");
        continue;
    }
    let resultado = calcFat(num);
    console.log(resultado);

    do {
        resp = prompt("Deseja calcular o fatorial de outro número? Digite 's' ou 'S' caso deseje, ou 'n' ou 'N' caso deseje encerrar o programa: ");
    } while (resp !== 's' && resp !== 'S' && resp !== 'N' && resp !== 'n');

    repetir = resp;
}