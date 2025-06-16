let fichaAluno = [
    'João Da Silva',
    17,
    true,
    {rua: 'Principal', num: 123},
    ['Matemática', 'Português', 'Informática']
];
fichaAluno[3].rua = 'Secundária';
fichaAluno[3].num = 321;
fichaAluno[4][0] = "Cybersegurança";
fichaAluno[4][1] = 'Banco de Dados';
console.log("Ficha Completa:", fichaAluno);