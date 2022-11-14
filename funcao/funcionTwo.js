function escreverMeuNome() {
    const nomes = 'Everaldo';
    return 'Meu nome é'  + " " + nomes;
}
escreverMeuNome();
console.log(escreverMeuNome())

//desconto
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}
const precoNormal = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoNormal, 10));
} else if(formaDePagamento === 2) {
    console.log(aplicarDesconto(precoNormal, 15));  
} else if(formaDePagamento === 3) {
    console.log(precoNormal);
} else {
    console.log(aplicarJuros(precoNormal, 10));
}