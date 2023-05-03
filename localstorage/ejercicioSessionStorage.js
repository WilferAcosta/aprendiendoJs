function guardar(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    sessionStorage.setItem("Nombres",nombre);
    sessionStorage.setItem("Apellidos",apellido);
    v.set(nombre,apellido);
}
function cargar(){
    document.getElementById("mostrarNombre").value = sessionStorage.getItem("Nombres");
    document.getElementById("mostrarApellido").value = sessionStorage.getItem("Apellidos"); 
    v.forEach(function(v,k){
        console.log("nombre: ",k," su apellido es ",v);
    });
}

const v = new Map();
console.log(v)

