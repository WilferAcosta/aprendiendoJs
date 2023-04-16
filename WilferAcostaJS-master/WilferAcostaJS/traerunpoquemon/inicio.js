let id;

function pokemon() {

    randomPokemon();

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;


    fetch(url)
        .then(response => response.json())
        .then(data => {


            let pkmName = capitalize(data.name);
            let pkmweight = (data.weight);
            let pkmheight = (data.height);
            
            document.getElementById('pokemonMsg').innerHTML =`
            <h1 style="color: green;">Pokemon</h1>`

            document.getElementById('pokemonSprite').src = data.sprites.front_default;
            document.getElementById('pokemonQuantity').innerHTML

            document.getElementById('pokemonName').innerHTML = `
             <h1 style="color: white;">${pkmName}</h1>`

            

            document.getElementById('pokemonweight').innerHTML = `
            <h1 style="color: black;">${pkmweight}</h1>`
            
            document.getElementById('pokemonheight').innerHTML = `
            <h1 style="color: black;">${pkmheight}</h1>`

            console.log(pkmName);
            console.log(pkmheight);
            console.log(pkmweight);
        })
}

function randomPokemon() {
    id = Math.round(Math.random() * 150) + 1;
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}


