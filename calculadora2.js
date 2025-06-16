
let prompt = require('prompt-sync')();

console.log('===Calculadora Simples===\n');
console.log('Escolha a opção');
console.log('Soma => (1)');
console.log('Subtração => (2)');
console.log('Multiplicação => (3)');
console.log('Divisão => (4)');

console.log('===Calculadora Simples===');

// solicitação da operação desejada
let operacao = prompt('Digite a operação desejada: (1 a 4):');

console.log('Escolha a operação desejada: ', operacao);
// solicitação dos valores
let numero1 = parseInt(prompt('Digite o primeiro numero: '));
let numero2 = parseInt(prompt('Digite o segundo numero: '));

let resultado
if (isNaN(numero1) || isNaN(numero2)) {
    console.log('Por favor, insira números válidos.');
    return;
}
// calculo da operação desejada
if (operacao === '1') {
    resultado = (numero1 + numero2);
    console.log('O resultado da soma eh:' , resultado);

}else if (operacao === '2') {
    resultado = (numero1 - numero2);
    console.log('O resultado da subtração eh:' , resultado);

}else if (operacao === '3') {
    resultado = (numero1 * numero2);
    console.log('O resultado da multiplicação eh:' , resultado);

}else if (operacao === '4') {

}

    resultado = (numero1/numero2);
if (numero2 === 0) {
    console.log('O resultado da divisão eh:' , resultado);
}else{
    console.log('Divisão por zero não é permitida.');
}