const vector = [1,[2,3],4];
const [a, ...b]= vector;
console.log(b);
//ejercicio 3
const vector1 =[1,[2,3],4];
const [...f]=vector1;
console.log(f);
//ejercicio 4
const vector2 =[1,[2,3],4];
const [g, ,h]=vector2;
console.log(g,h);
//ejercicio 5
let [saludo,,,nombre]=["hola","yo","soy","bueno"];
console.log(saludo);
console.log(nombre);