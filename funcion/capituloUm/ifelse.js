//function numeroPositivo(num) {
    
 //   const ehNegativo = num < 0;
//    if(ehNegativo) {
//        return false;   
//   }
//        return true;
//    }   
   
   //aninhamento
function numeroPositivo(num) {
    const maiorQueDez = num> 10;
    const ehNegativo = num < 0;

    if(ehNegativo) {  

            return "Esse número é negativo"; 
              
        } else if(!ehNegativo && maiorQueDez){
            return "Esse número é positivo e maior que 10!"
        }   
            return `${num} "Esse número é positivo!"`
    } 
    const num = 13; 
    const result = numeroPositivo(num);
   
   console.log(result)
    