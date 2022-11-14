class Carro{
    marca;
    cor;
    gastoMedio;
    
    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }  
     calcularGastoDePercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedio * precoCombustivel;  
    }
}
const uno = new Carro('FIAT', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70,5));
const prisma = new Carro('Chevrolet', 'Branco', 1/10);
console.log(prisma.calcularGastoDePercurso(70,5));