const Compras = new Map();
cont = "";
const Articulos= new Map([1,"Lapiz"],[2,"Cuadernos"],[3,"Borrador"],[4,"Calculadora"],[5,"Escuadra"]);
const Valores= new Map([1,2500],[2,3800],[3,1200],[4,35000],[5,3700]);
console.log(Articulos);
console.log(Valores);

function calcular(){
    let arti = 0;
    let valoruni=0;
    let total =0;
    let articulo=Number(document.getElementById("articulo").value);
    let cantidad=Number(document.getElementById("cantidad").value);
    arti=Articulos.get(articulo);
    valoruni=Valores.get(articulo);
    total=cantidad * valoruni;
    console.log(arti);
    console.log(valoruni);
    console.log(total);
}