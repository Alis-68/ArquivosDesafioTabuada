let prompt = require("prompt-sync")();
let senha;

do {
    senha = prompt("Digite a senha:");
} while (senha !== "SENAI123456789");

console.log("acesso concedido!");
