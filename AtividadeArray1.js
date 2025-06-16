prompt = require('prompt-sync')();

let numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let quantidade = parseFloat(prompt('digite a quantidade de nr:  '));

for(i=0; i<quantidade; i++ )   
{ 
let novoNumero = parseFloat(prompt('Digite um novo nr : ' + (i++)));
numeros.push(novoNumero); 
for(i=0; i<=novoNumero.length; i++)
console.log('o numero da posição ' + i + ' é: ' + [numeros[i]]);
}
