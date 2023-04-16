function mostrarMensaje(){
    console.log("se ha precionado el titulo")
}
const titulo=document.querySelector("h1");
//titulo.onclick = mostrarMensaje;
const parrafo=document.querySelector("p")
//agregamos un evento
titulo.addEventListener("click",mostrarMensaje);
let cont= 0;
parrafo.addEventListener("mouseover",()=>{
    
    parrafo.textContent="haz pasado " + (cont++) +" veces"
})
parrafo.addEventListener("mouseout",()=>{
    parrafo.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique, laudantium soluta distinctio harum quis minima nemo recusandae quae? Esse, dolorem repellat? Nostrum totam similique quisquam facilis, vel vero nobis."
})