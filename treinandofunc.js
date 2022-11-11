

//spread usar quando chama a function
function sum(x,y,z,a) {
   return x+y+z+a;
}
const numbers = [3,2,3,10];
    console.log(sum(...numbers));
//rest declarando somente
function confereTamanho(...args) {
    console.log(args.length);
}
confereTamanho()
confereTamanho()
confereTamanho()


