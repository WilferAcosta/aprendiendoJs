//ejercicio para saber cuantas veces se repite la palabra .

let texto = "Este es un ejemplo de un texto que es ideal para procesar";
text = texto.split(" ");
console.log(text);
const txt = new Set(text);
console.log(txt.size);
const repetidas =[];
const unicas = [];
txt.forEach((k, v) => v === 1 ? unicas.push(k) : repetidas.push(k))
console.log(unicas);
console.log(repetidas);