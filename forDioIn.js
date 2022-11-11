// retorna propiedades
function Exemplo(obj) {
    for(prop in obj){
        console.log(prop);
    }
}
const meuObjeto = {
    nome:"Rosimeire",
    idade: "35",
    cidade: "São Paulo"
}
Exemplo(meuObjeto);
//utilizando[]
function Exemplo(obj) {
    for(prop in obj){
        console.log(obj[prop]);
    }
}
const meuObjet = {
    nome:"Rosimeire",
    idade: "35",
    cidade: "São Paulo"
}
Exemplo(meuObjet);