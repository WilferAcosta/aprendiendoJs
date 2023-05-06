let id1;
let id2;
function pokemon() {
    randomPokemon();
    const url1 = `https://pokeapi.co/api/v2/pokemon/${id1}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon/${id2}`;
    fetch(url1)
        .then(response => response.json())
        .then(data => {
            let pkmName = capitalize(data.name);
            let pkmweight = (data.weight);
            let pkmheight = (data.height);
            //creamos el titulo pokemos
            document.getElementById('pokemonMsg').innerHTML =`
            <h1 style="color: green;">Pokemon</h1>`
            //agrego la imagen
            document.getElementById('pokemonSprite').src = data.sprites.front_default;
            //agrego h1 con el nombre del pokemon
            document.getElementById('pokemonName').innerHTML = `
            <h1 style="color: black;">${pkmName}</h1>`
            //agrego el ancho del pochemon
            document.getElementById('pokemonweight').innerHTML = `
            <h1 style="color: black;">${pkmweight}</h1>`
            //agrego el alto del pokemon
            document.getElementById('pokemonheight').innerHTML = `
            <h1 style="color: black;">${pkmheight}</h1>`
        })
        //pokemos 2
        fetch(url2)
        .then(response => response.json())
        .then(data => {
            let pkmName = capitalize(data.name);
            let pkmweight = (data.weight);
            let pkmheight = (data.height);
            document.getElementById('pokemonMsg2').innerHTML =`
            <h1 style="color: green;">Pokemon</h1>`

            document.getElementById('pokemonSprite2').src = data.sprites.front_default;

            document.getElementById('pokemonName2').innerHTML = `
            <h1 style="color: black;">${pkmName}</h1>`

            document.getElementById('pokemonweight2').innerHTML = `
            <h1 style="color: black;">${pkmweight}</h1>`
            
            document.getElementById('pokemonheight2').innerHTML = `
            <h1 style="color: black;">${pkmheight}</h1>`
        })
}


function randomPokemon() {
    id1 = Math.round(Math.random() * 150) + 1;
    id2 = Math.round(Math.random() * 150) + 1;
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}


