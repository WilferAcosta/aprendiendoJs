let strHTML = "";
let str2HTML = "";
let menor = Infinity;
diferencia=0;
let contnombre="";
let contproducto="";
let contPasado="";
let contNuevo="";
let nombre=prompt("...Ingrese el nombre del provedor...");
while (nombre !== "fin"){
  let producto=prompt("...Ingrese el nombre del producto...");
  let precioPasado = Number(prompt("...Ingrese el precio de año pasado 2022..."));
  let precioNuevo = Number(
prompt("...Ingrese el precio de este año pasado 2023..."));
  diferencia = precioNuevo - precioPasado;
  if(diferencia < menor){
    menor=diferencia;
    diferencia=precioNuevo/precioPasado;
    nombre=contNuevo;
    producto=contproducto;
    precioPasado=contPasado;
    precioNuevo=contNuevo;
 }
  strHTML+= `<tr><td>${nombre}</td><td>${producto}</td><td>${precioPasado}</td><td>${precioNuevo}</td></tr>`;
  document.getElementById("datos").innerHTML = strHTML;
  nombre=prompt("Ingrese el nombre del provedor...");
}
str2HTML+= `<tr><td>${contnombre}</td><td>${contproducto}</td><td>${contNuevo}</td><td>${contPasado}</td><td>${diferencia}</td></tr>`;
document.getElementById("datos2").innerHTML = str2HTML;
//return strHTML;
