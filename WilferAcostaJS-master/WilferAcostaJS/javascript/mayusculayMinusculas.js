function palMayuscula(letraA){
    return palabra === palabra.toUpperCase();
}
function palMninuscula(letraA){
    return palabra === palabra.toLowerCase();
}
let palabra = prompt("...Ingrese la plabra...");
let palabra2 = palabra.trim();
let contM = 0;
for (i = 0; i < palabra2.length; i++) {
  let letraA = palabra2.charAt(i);
  if (palMayuscula(letraA)) {
    console.log("la palabra es mayuscula");
  }
  else if (palMninuscula(letraA)){
    console.log("la palabra minuscula");
  }else{
    console.log("la palabra es mesclada");
  }
}