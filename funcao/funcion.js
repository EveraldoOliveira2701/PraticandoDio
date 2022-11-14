function sayMyName(name) {
    console.log('Seu nome é:' + name);
}
sayMyName('Everaldo');
sayMyName('Oliveira');
function quadrado(valor) {
    return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 12.35));
console.log(incrementarJuros(100, 17));