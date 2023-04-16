function crearMatriz(matriz, fil, col) {
    for(let i=0; i<fil; i++)
        matriz[i] = new Array(col);

    return matriz;
}

function imprimirMatriz(matriz) {
    for(let f=0; f < matriz.length; f++) {
        let fila = "";
        for(c=0; c < matriz[f].length; c++) {
            fila += matriz[f][c] + "\t\t";
            
        }
        console.log(fila);
    }
}

const llenarMatriz = function(m) {
    for(let f=0; f < m.length; f++) {
        for(let c=0; c < m[f].length; c++) {
            m[f][c] = prompt(`Ingrese el dato para m[${f+1}][${c+1}]`)
        }
    }
}

let matriz = [];
let fil= 2, col =3;


fil = Number(prompt("Ingrese el número de filas"));
col = Number(prompt("Ingrese el número de columnas"));
matriz = crearMatriz(matriz, fil, col);
llenarMatriz(matriz);
imprimirMatriz(matriz)