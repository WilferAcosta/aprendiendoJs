function construirTarjetas(personajes){
    const main = document.querySelector("main");
    personajes.results.forEach(p => {
        console.log(p);
        const articulo = document.createRange().createContextualFragment(`<article>
            <div class="image-container">
                <img src="${p.image}" alt="personaje Rick and Morty">
            </div>
            <h2>${p.name}</h2>
            <span>${p.status}</span>
        </article>`)
        main.append(articulo);
    });
    
}
function ObtenerPersonaje(){
    const url = "https://rickandmortyapi.com/api/character"
    fetch(url)
    .then(result => result.json())
    .then(datos => {
        console.log(datos)
        construirTarjetas(datos)
    .catch((error) => {
        console.log("error al consumir la api", error.menssage);
    })
    .fynally(()=>{
        console.log("se ha consumir todo el api");
    })
    })
    
}
ObtenerPersonaje();

