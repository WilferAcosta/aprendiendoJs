
// console.dir(document.body.children[0]);//antigua de como traer 
// console.log(document.querySelector("h1"));//solo trae el primero que encuentro de h1
// console.log(titulo);
// console.log(document.querySelector("#nombre"));
// console.log(document.querySelectorAll("h1"));
//modificar desde el dom
// let h1=document.querySelector("nombre");
// h1.innerHTML="<em>rodolfito petrosqui</em>"//agrega atributos em
// h1.textContent="<em>rodolfito petrosqui</em>"//muestra todo no agrega ñps atributos
//crear elmentos desde js
//let img=document.createElement("img");//si creo la etiqueta img en mayuscula la trae mas rapido
//agregar atributos
//img.src = "https://us.123rf.com/450wm/drmicrobe/drmicrobe2301/drmicrobe230100364/196916783-viajes-interdimensionales-y-universos-paralelos-ilustraci%C3%B3n-de-ciencia-ficci%C3%B3n-ai.jpg?ver=6";
//img.width="250";
//console.log(img);

//document.querySelector("body").append(img);
//document.querySelector("h1").insertAdjacentElement("beforeend",img);
let tr=document.createElement("tr");
document.querySelector("#myData").append(tr);
tr.id="tr";
for(let i=0;i<2;i++){
    let nombre=prompt("ingrese nombre ");
    let apellido=prompt("ingrese el apellido");
    let edad=prompt("ingrese la edad");
    let altura=prompt("ingrese la altura");
    
    let td=doc-ument.createElement("td");
    document.querySelector("td").insertAdjacentText(nombre);
    
    
}
