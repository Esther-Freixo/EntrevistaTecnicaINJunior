const prompt = require('prompt-sync')();

let fila = ['João', 'Maria'];
let resposta;

do {
  console.log('\nFila atual:');
  for (let i = 0; i < fila.length; i++) {
    console.log(`${i + 1}º ${fila[i]}`);
  }

  console.log('\nSelecione uma opção abaixo:\n');
  console.log('1 - Novo Cliente');
  console.log('2 - Atender Cliente');
  console.log('3 - Sair\n');

  resposta = prompt("Opção: ");

  if (resposta === '1') {
    const cliente = prompt("Digite o nome do novo cliente: ");
    fila.push(cliente);
  } else if (resposta === '2') {
    const atendido = fila.shift();
    if (atendido) {
      console.log(`\nCliente atendido: ${atendido}`);
    } else {
      console.log('\nNenhum cliente na fila');
    }
  } else if (resposta === '3') {
    console.log('\nPrograma Encerrado.');
  } else {
    console.log('\nOpção inválida! Tente novamente');
  }

} while (resposta !== '3');
