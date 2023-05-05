import cargarTexto from "./cargarTexto.js";


const cargartxt = document.getElementById("cargartxt");
const btnCargar= document.getElementById("btntexto");
btnCargar.addEventListener("click",(e)=>{
    cargarTexto(cargartxt);
    e.stopPropagation();
});

const btnJson = document.getElementById("btnJson");
const cargarJson= document.getElementById("cargarJson");

btnJson.addEventListener("click",(e)=>{
    cargarDatosjson(cargarJson);
    e.stopPropagation();
});

function cargarDatosjson(elemHTML){
    fetch("datos.json")
    .then(response => response.json())
    .then(datos => {
        console.table(datos);
        agregarhtml(elemHTML,datos)
    })
}

function agregarhtml(elemHTML,datos){
    let fila = "";
    for (const valor of datos) {
        fila += `<tr><td>${valor.NOMBRE}</td><td>${valor.EQUIPO}</td><td>${valor.EDAD}</td><td><img src"${valor.GENERO === 
            "M" ? "hombre.png" : "mujer.png"} alt="Camper"</td>
        </tr>`
        
    }
    elemHTML.innerHTML = fila;
}