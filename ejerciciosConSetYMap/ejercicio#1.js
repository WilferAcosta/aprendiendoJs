//ejercicio para saber cuantas veces se repite la palabra .

let texto = "Este es un ejemplo de un texto que es ideal para procesar";

let palabras = texto.split(" ");
let cont = new Map();// creo un map vacio

palabras.map(palabra => {
  let p = palabra.toLowerCase();
  console.log(p);
  if (cont.has(p)) {
    cont.set(p, cont.get(p) + 1);//set sirve para crear el diccionario de la forma [key y value] para el diccionario y get trae el vlaue si existe suma 1
  } else {
    cont.set(p, 1);
  }
});

console.log("Palabra\t\tVeces");
console.log("------------------");
cont.forEach((valor, llave) => {console.log(`${llave}\t\t${valor}`);
});