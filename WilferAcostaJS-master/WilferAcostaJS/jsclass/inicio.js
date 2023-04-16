//metodo string
console.log("*".repeat(10));//repite la cadena 10 veces
let str = "hola estoy aprendiendo javascript en campus."
console.log(str.startsWith("hola"));//devuelve verdadero si una cadena comienza con str
console.log(str.endsWith('campus.'))//lo hace al contrario
console.log(str.includes('aprendiendo',12))//devuelve verdadero si una cadena contiene en el string.
// uso de prompt un cuadro como alerte para que el usuario digite valores
let sexo = prompt("Ingrese el sexo");//si quiero pasar un o varios parametros de ingreso es asi let sexo = prompt("Ingrese el sexo","M,F");
console.log(sexo)
result = confirm(pregunta);
let isBioss = confirm("?eres el jefe?");
alert( isBioss)
let vlaue = true;
alert(typeof vlaue);
value = string(value);
alert(typeof value);//string
alert("6"/"2")
//convertir cadena a numero number(str)
//para saver que tipo es (typeof num)
//convertir un texto a booleano true false
alert(Boolean(1));//true
alert(Boolean(0));//false
alert(Boolean("grfdsf"));//true
alert(Boolean(""));//false
//salida de js interno document.getElementById(id)
document.getElementById("demo").innerHTML=5+6;//para enviarlo en el id del html
document.write(5+6);