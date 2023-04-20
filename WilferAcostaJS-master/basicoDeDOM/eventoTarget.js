// const BTN1=document.querySelector(".btn-outline-primary");
// const BTN2=document.querySelector(".btn-outline-danger");
// let contador = 0;
// const TXTCONTADOR = document.getElementById("idCont")
// SIN target
// BTN1.addEventListener("click",()=>{
//     aumeValor();
// })
// BTN2.addEventListener("click",()=>{
//     dismiValor();
// })
// function aumeValor(){
//     TXTCONTADOR.textContent = ++contador;
// }
// function dismiValor(){
//     TXTCONTADOR.textContent = --contador;
// }

// CON TARGET
let contador = 0;
const CONTAINER = document.querySelector(".container");
const TXTCONTADOR = document.getElementById("idCont")
CONTAINER.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-outline-primary"))//contains es igual lo del los elemtentos = al clase que se le pasa
    TXTCONTADOR.textContent = ++contador;
    else if (e.target.classList.contains("btn-outline-danger"))
    TXTCONTADOR.textContent = --contador;
    e.stopPropagation();//para que no cuente lso clik de body o de otros elementos de body osea los padres
});
document.body.addEventListener("click",()=>{
    console.log("evento clic del body");
})