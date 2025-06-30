const prompt = require('prompt-sync')();

const verificarIdades = (arr) => {
    const anoAtual = parseInt(prompt("Informe o ano atual: "));

    let maior = [];
    let menor = [];

    for (let i = 0; i < arr.length; i++) {
        let idade = anoAtual - arr[i];

        if (idade < 18) {
            menor.push(idade);
            console.log(`Pessoa ${i + 1}: Menor de idade`);
        } else {
            maior.push(idade);
            console.log(`Pessoa ${i + 1}: Maior de idade`)
        }
    }
}

const anosDeNascimento = [2005, 2010, 1990, 1985, 2015, 2000, 1978, 2008];

verificarIdades(anosDeNascimento);