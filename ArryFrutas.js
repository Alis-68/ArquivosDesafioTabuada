prompt = require('prompt-sync')();

let frutas = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi', 'bluebery'];
let quantidade = parseFloat(prompt('Digite a quantidade de frutas: '));

for (let i = 0; i < quantidade; i++) {
    let novaFruta = prompt('Digite o nome da fruta ' + (i + 1) + ': ');
    frutas.push(novaFruta);
}

console.log('Frutas Cadastradas:');
for (let i = 0; i < frutas.length; i++) {
    console.log('Fruta ' + (i + 1) + ': ' + frutas[i]);
}