function crearMatriz(matriz,fil,colu){
    for(let i =0;i<fil;i++){
        matriz[i]= new Array(colu);
        return matriz;
    }
}
function imprimirMatriz(matriz){
    for(let f=0;f<matriz.length;f++){
        let fila="";
        for(let c=0;c<matriz[f].length;c++){
            console.log(matriz[f][c]+"\t\t");
        }
        console.log(fila);
    }
}
let matriz=[];
let fil=2, colu=2;
resultado=crearMatriz(matriz,fil,colu);
console.log(resultado);
let manga=[["piña","pera"],["maiz","peto"],["sancocho","caldo"]];
imprimirMatriz(manga);