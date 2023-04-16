let matriz = new Array(); //[]
let resultado="";
function ordenar() {
    let datos =new Array();
    let nombre = document.formulario2.nombre.value;
    let lunes = Number(document.formulario2.lunes.value);
    let martes = Number(document.formulario2.martes.value);
    let miercoles= Number(document.formulario2.miercoles.value);
    let jueves = Number(document.formulario2.jueves.value);
    let viernes = Number(document.formulario2.viernes.value);
    let sabado = Number(document.formulario2.sabado.value);
    let suma = lunes+martes+miercoles+jueves+viernes+sabado;1   
    //  let datos= document.formulario.ordenados.value.split("\n");
    datos.push(nombre,lunes,martes,miercoles,jueves,viernes,sabado,suma);
    matriz.push(datos);
    console.log(datos);
    resultado += `<tr><td>${datos[0]}</td><td>${datos[1]}</td><td>${datos[2]}</td><td>${datos[3]}</td><td>${datos[4]}</td><td>${datos[5]}</td><td>${datos[6]}</td><td>${datos[7]}</td></tr>`
    console.log(resultado);
    document.getElementById("tabla").innerHTML= resultado;
    document.formulario2.nombre.value = "";
    document.formulario2.lunes.value = "";
    document.formulario2.martes.value = "";
    document.formulario2.miercoles.value = "";
    document.formulario2.jueves.value = "";
    document.formulario2.viernes.value = "";
    document.formulario2.sabado.value = "";
    
}

function flimpiarTxtArea() {
    document.miformulario.ordenados.value = "";
}