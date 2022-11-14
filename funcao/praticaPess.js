class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
}
const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularImc());
  class Pessoa {
        nome;
        idade;

        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
    }

    function descreverPessoa(pessoa) {
        console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
    }

    const renan = new Pessoa('Renan', 30);
    console.log(descreverPessoa(renan))