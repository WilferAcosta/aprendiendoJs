
myObje = [];
let body = "";
function guardarDatos(){
    data = {}
    data.nombre = document.getElementById("nombreC").value;
    data.edad= document.getElementById("edad").value;
    data.telefono =document.getElementById("telefono").value;
    data.email = document.getElementById("email").value;
    data.direccion = document.getElementById("direccion").value;
    data.fechaNaci = document.getElementById("fechaNaci").value;
    data.identificacion = document.getElementById("identidad").value;
    data.fechaIngre = document.getElementById("fechaIngreso").value;
    data.idteam = document.getElementById("team").value;
    myObje.push(data);
    //stringify(myObje);
    const url = "http://localhost:3000/reclutas"
    fetch(url)
    .then(result => result.json())
    .then(datos => {
        console.log(datos);
        datos.forEach(el => {
            body += `<tr><td>${el.id}</td><td>${el.nombre}</td><td>${el.edad}</td><td>${el.telefono}</td><td>${el.email}</td><td>${el.direccion}</td><td>${el.fechaNacimiento}</td><td>${el.numeroIdentidad}</td><td>${el.fechaIngreso}</td><td>${el.idteam}</td><td><button class="edit">Editar</button><button class="delete">Eliminar</button></td></tr>`;
            document.getElementById("tabla").innerHTML = body;
        });
        
    })
}



