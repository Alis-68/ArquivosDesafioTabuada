let numero = require('PromptSync')();
numero = parseInt(numero('Digite um numero:'));

for (let  i = 1; i <= 10; i++) 
{
    console.log(numero + '*' + i + ' = ' + (numero * i));
}