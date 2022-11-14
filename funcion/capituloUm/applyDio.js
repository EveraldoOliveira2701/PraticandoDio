const pessoa = {
    nome: "Nina",
};
const animal ={
    nome: "Cão",
};
function getSomething(){
    console.log(this.nome);
}
getSomething.apply(animal);
//a variavel denrtro do apply () sera apresentada na saida
const myObl = {num1: 2, num2 : 4};
function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma.apply(myObl, [10, 5]);
//no apply usamos as chaves(,[])


//    Bind clone de função
const retornaNomes = function () {
    return this.nome;
};
let bruno = retornaNomes.bind({ nome: "Bruno"});
bruno();
console.log(bruno())

//      arrow

const arrow = () => {
   
    return 'arrow aqui! correto!!!!!! /o/'
}
const flx = arrow();
console.log(flx)
const arrow2 = () => 'Arrow - 2 /o/   /o/  /o/ a melhor versão e mais curta!';
console.log(arrow2())
// sintax para calculos
// dois ou mais argumentos não precisa do parenteses apos a =>
//const soma = (a, b) => a+b;
//soma(4,6);
//apenas um argumento sem parenteses é aceito
///const somasoma = a => a;
//somasoma(4);

// não funcionam com a => this,arguments e construtur