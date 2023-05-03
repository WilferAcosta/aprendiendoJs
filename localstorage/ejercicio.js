
function guardar(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    localStorage.setItem("Nombres",nombre);
    localStorage.setItem("Apellidos",apellido);
}
function cargar(){
    document.getElementById("mostrarNombre").value = localStorage.getItem("Nombres");
    document.getElementById("mostrarApellido").value = localStorage.getItem("Apellidos");
}