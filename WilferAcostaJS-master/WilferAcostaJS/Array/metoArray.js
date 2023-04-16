// let arrayName=[valor1,valor2,...];
// let arrayName=new arrayName();
let casa = ["1bhk]","2hola","comoestas","4bhk"]
console.log(casa);
let valores = new Array(10,20,30,40,50);
console.log(valores);
//para traer un valor se usa [1] y se le pasa el numero de posicion que quiero traer
let valor= new Array(5);
console.log(valor);
//creacion de array
let hause =["casa1",25000,"casa2",50000,"casa3",60000];
console.log("la "+hause[0]+" cuesta "+hause[1]);
//para cambiar el dato es
hause[0]="casa5";
console.log(hause);
//recorrido de una array
for(let i=0;i<casa.length;i++){
    console.log(casa[i]);
}