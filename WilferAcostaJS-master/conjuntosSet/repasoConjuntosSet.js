const miConjunto=new Set(["daniel","oscar","wilfer","daniel","orlando"]);//creamos un conjuntno
miConjunto.add("fabian");//agregamos elementos al conjunto
miConjunto.add("wilfer");
miConjunto.delete("fabian");//sirve para eliminar elementos del conjunto
console.log(miConjunto);
console.log(miConjunto.has("oscar"));//sirve para buscar elementos en el conjunto devuelve true o folse
miConjunto.forEach(function (elemen){//para recorrer cada elemento del conjunto
    console.log(elemen);
})
console.log(miConjunto.values());//iterarr el conjunto

for(let elem of miConjunto.values()){//itera pero uno por uno de forma vertical
    console.log(elem);
}
console.log(miConjunto.size);//devuelve la cantidad de elemento.
miConjunto.clear();//sirve para eliminar un conjunto.
console.log(miConjunto.size);
//agregar un conjunto de un vector para eliminar repetidos
let vnombre=["daniel","oscar","wilfer","daniel","orlando"];

for(let i=0;i <vnombre.length;i++){
    miConjunto.add(vnombre[i]);
}
console.log(miConjunto);