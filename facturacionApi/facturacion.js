let body = "";
let body2= "";
function cargar(){
    
    fetch("http://localhost:4001/personas")
    .then(res => res.json())
    .then(datos =>{
        datos.forEach(elem => {
            body += `<tr><td>${elem.id}</td><td>${elem.nombre}</td><td>${elem.apellido}</td></tr>`;
        });
        document.getElementById("personas").innerHTML = body;
    })
    fetch("http://localhost:4001/facturas")
    .then(res => res.json())
    .then(dato =>{
        dato.forEach(elem2 => {
            body2 += `<tr><td>${elem2.id}</td><td>${elem2.fecha}</td><td>${elem2.valor}</td><td>${elem2.personaId}</td></tr>`;
        });
        document.getElementById("facturas").innerHTML = body2;
    })
}
//punto 8 ordenar 2 a 4
//http://localhost:4001/facturas?_short=valor&_order=desc&id_gte=2&id_lte=4
//punto 12
//http://localhost:4001/personas?nombre_like=^[^M]