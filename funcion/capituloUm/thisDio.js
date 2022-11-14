const pessoa = {
    firstName: "Bydu",
    lastName: "Honório",
    id      : "1",
    fullName: function() {
        return this.firstName + " " + this.lastName;       
    },
    getId: function(){
        return this.id;
    }
};
const resulta = pessoa.getId();
console.log(resulta)
const result = pessoa.fullName();
console.log(result)
//fora da função retorna vazio
//no navegador mostra toda window e o seu conteudo
//dentro da função ela mostra global
//dentro de um objeto (m´todo)
//html evento ele é o elemento que recebe o evento
