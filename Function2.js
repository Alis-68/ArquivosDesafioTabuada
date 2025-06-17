function gerarCredencial(setor) {
    const numeroAleatorio = Math.floor(Math.random()*1000);
    const credencial = setor.toUpperCase()+ "-" + numeroAleatorio;
    return credencial;
}
const credencialFinanceiro = gerarCredencial("Financeiro");
const credencialSuporte = gerarCredencial("Suporte");
console.log("Credencial gerada para o Financeiro", credencialFinanceiro);
console.log("Credencial gerada para o suporte ", credencialSuporte);