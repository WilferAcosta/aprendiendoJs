localStorage.setItem("Nombre", "Wilfer");//guardar datos tipo mapa
localStorage.Apellido="Acosta Rodriguez";//guardar datos con odjeto

let nombre = localStorage.getItem("Nombre");//traer el dato o recuperar
let apellido = localStorage.getItem("Apellido");//traer el dato
// for (let i = 0 ;i<localStorage.length;i++){
//     let k= localStorage.key(i);
//     console.log(`llave: ${k} su valor es: ${localStorage.getItem(k)}.`);
// }
//otra forma de iterar rapidamente
for(let k in localStorage){
    if(!localStorage.hasOwnProperty(k))
        continue
    console.log(`llave: ${k} su valor es: ${localStorage.getItem(k)}.`);
}
//acceder a las claves con objete
alert(nombre + " "+ apellido);