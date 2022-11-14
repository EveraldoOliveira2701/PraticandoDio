const pessoa = {
    nome: 'Miguel',
};
const animal = {
    nome: 'Murphy',
};
function getSomething() {
    console.log(this.nome);
}
getSomething.call(animal);

//função com numeros call
const myObl = {num1: 2, num2 : 4};
function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObl, 10, 5);