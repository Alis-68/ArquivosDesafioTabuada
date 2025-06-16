let pessoa = {
    nome: "Alice Smith",
    idade: 30,
    endereço: {
        rua: "123 Main St",
        cidade: "Springfield",
        cep: "12345"
    },
};
pessoa.nome = "Pedro Henrique"; // Adicionando uma propriedade com índice numérico
pessoa.idade = 20;
pessoa.endereço.cidade = "Muriaé"; 
console.log(pessoa); // Acessando o nome