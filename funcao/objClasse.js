const pessoa = {
    nome: 'Everaldo',
    idade: 47,
    descrever: function () {
        console.log(`Meu nome é' ${this.nome} e minha idade é ${this.idade}`);
    }
};
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.altura = 1.72;
console.log(pessoa);
pessoa.descrever();
///   classe
class Pessoa {
    nome;
    idade;
    sexo;
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
const bydu = new Pessoa();
bydu.nome = 'Bydu';
bydu.idade = 2;
bydu.sexo = 'Macho'
console.log(bydu);
bydu.descrever();



