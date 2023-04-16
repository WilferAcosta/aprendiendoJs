//primero filas luego colubna
let matriz =[["salmon","habil"],
            ["marzo","junio"]];
console.log(matriz);
console.log(matriz[1][0]);

//crear una matriz
function crearMatriz(matriz,fil,colu){
    for(let i =0;i<fil;i++){
        matriz[i]= new Array(colu);
        return matriz;
    }
}
let matriz2=[];
let fil=2, colu=2;
resultado=crearMatriz(matriz,fil,colu);
console.log(resultado);

