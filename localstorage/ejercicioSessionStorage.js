function guardar(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    sessionStorage.setItem("Nombres",nombre);
    sessionStorage.setItem("Apellidos",apellido);
    cont.push(localStorage.setItem("Nombres",nombre),localStorage.setItem("Apellidos",apellido))
}
function cargar(){
    document.getElementById("mostrarNombre").value = sessionStorage.getItem("Nombres");
    document.getElementById("mostrarApellido").value = sessionStorage.getItem("Apellidos");
    
    for(let a of cont){
        str+= `nombre : ${a} apellido : ${a.getItem}`
}
cont = [];
str = "";

