cont = "";
cont1 = "";
sum = 0;
const Articulos= new Map([[1,"Lapiz"],[2,"Cuadernos"],[3,"Borrador"],[4,"Calculadora"],[5,"Escuadra"]]);
const Valores= new Map([[1,2500],[2,3800],[3,1200],[4,35000],[5,3700]]);
const facturacion= new Array();


function calcular(){
    const articulo=Number(document.getElementById("articulo").value);
    const cantidad=Number(document.getElementById("cantidad").value);
    let arti = Articulos.get(articulo);
    let valoruni = Valores.get(articulo);
    let total = cantidad * valoruni;
    console.log(arti);
    console.log(valoruni);
    console.log(total);
    cont += `<tr><td>${arti}</td><td>${cantidad}</td><td>${valoruni}</td><td>${total}</td></tr>`
    document.getElementById("tabla").innerHTML = cont;
    facturacion.push(arti,cantidad,valoruni,total);
    sum += facturacion[3];
    cont1 = `<tr><td></td><td></td><td></td><td>${sum}</td></tr>`;
    document.getElementById("resultado").innerHTML= cont1;
}
