function calculaidade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}
const pessoa = {
    nome:  'Maria',
    idade: 30,
};
const pessoa2 = {
    nome:  'Marta',
    idade: 10,
};
console.log(calculaidade.apply(pessoa2,[4]));
//aqui a variavel dentro do []
// altera o resultado
//stephany nusch.........>