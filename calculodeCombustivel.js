const valorEtanol = 5.80;
const valorGas = 15.80;
const media = 8;
const Km = 100;

const tipo = 'etan'; 
if (tipo === 'etanol') { 
    const etanol = (Km/media)*valorEtanol;   
  console.log(etanol + 'alcool')
} else {  
    const gasolina = (Km/media)*valorGas;    
    console.log(gasolina + 'gas')
  
} ;
const  a1 = 5;
const  a2 = 5;
const  a3 = 3;
const media2 = (a1+a2+a3)/3;
console.log(media2);
    if (media2 < 5) {
        console.log('Reprovado');
    }else if (media2 >= 5 && media2 < 7) {
        console.log('Recuperação');
    } else {
        console.log('Aprovado');
    }


