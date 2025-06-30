const prompt = require('prompt-sync')();

let time = [];
let resp;

const adicionarJogador = (nome, idade, posicao, pontuacao) => {
    const novoJogador = { nome, idade, posicao, pontuacao };
    time.push(novoJogador);
};

const buscarPorPosicao = (pos) => {
    let encontrou = false;
    for (let i = 0; i < time.length; i++) {
        if (time[i].posicao === pos) {
            console.log(time[i].nome);
            encontrou = true;
        }
    }
    if (!encontrou) {
        console.log("Nenhum jogador desta posição foi encontrado.");
    }
};

const listarTime = (time) => {
    console.log("\nLista de jogadores:");
    for (const jogador of time) {
        console.log(jogador);
    }
}

const calcularPontuacaoMedia = (time) => {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
    } else {
        let soma = 0;
        for (const jogador of time) {
            soma += jogador.pontuacao;
        }
        const media = soma / time.length;
        console.log(`Pontuação média do time: ${media.toFixed(2)}`);
    }
}

do {
    console.log('\nSelecione uma opção abaixo:\n');
    console.log('1 - Adicionar jogador');
    console.log('2 - Buscar por posição');
    console.log('3 - Listar time');
    console.log('4 - Calcular pontuação média');
    console.log('5 - Sair');

    resp = prompt("Digite a opção desejada: ");

    if (resp === '1') {
        const nome = prompt("Digite o nome do jogador: ");
        const idade = parseInt(prompt("Digite a idade do jogador: "));
        const posicao = prompt("Digite a posição do jogador: ");
        const pontuacao = parseInt(prompt("Digite a pontuação do jogador: "));
        adicionarJogador(nome, idade, posicao, pontuacao);
    } else if (resp === '2') {
        const pos = prompt("Digite a posição que deseja buscar: ");
        buscarPorPosicao(pos);
    } else if (resp === '3') {
        listarTime(time);
    } else if (resp === '4') {
        calcularPontuacaoMedia(time);
    } else if (resp === '5') {
        console.log("Programa encerrado");
    } else {
        console.log("Opção inválida. Tente novamente.");
    }

} while (resp !== '5');
