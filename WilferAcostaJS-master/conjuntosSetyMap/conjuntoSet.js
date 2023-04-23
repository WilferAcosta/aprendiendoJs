// crear un nuevo conjunto
const cLetras =new Set(['a','b','c','d']);
console.log(cLetras);
// otra manera de crar
const cLetras2=new Set();
//agregar elementos al con junto
cLetras2.add('a');
cLetras2.add('b');
cLetras2.add('c');
cLetras2.add('d');
console.log(cLetras2);
//ELIMINAR ELEMETOS DE UN CONJUNTO DELETE
cLetras2.delete('c');
console.log(cLetras2);
//verificar si un elemento existe en el conjunto
console.log(cLetras2.has('c') ? "existe el elemento" : "no existe el elemento");
console.log(cLetras2.has('b'));
//mostrar la cantidad de elementos del conjunto
console.log(cLetras2.size);// 3
// iterrar el conjunto con ForEach
let str ="";
cLetras2.forEach(e=>{
    str+=e + ",";
    
});
console.log(str);
//iterar el conjunto con for .. of
console.log(cLetras2.values());// iterador 
let str2=""
for (const LETRA of cLetras2.values()) {//se le puede dejar .values() o no 
    str2+= LETRA + ","
}
console.log(str2);