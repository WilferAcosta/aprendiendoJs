const miDiccionario = new Map([
    ["daniel",25],
    ["wilfer",28],
    ["oraldno",16]
]);
console.log(miDiccionario);
miDiccionario.set("acosta",50);//agregamos un elemento al diccionario con su key y value
miDiccionario.set("oscar",19);
miDiccionario.delete("daniel");//para eliminar se pasa el key
console.log(miDiccionario);
console.log(miDiccionario.has("daniel"));//para ver si esta el lemento  devuelve truo o false
console.log(miDiccionario.has("wilfer"));
console.log("la edad de wilfer es",miDiccionario.get("wilfer"));// sirve el get para traer el valor de key
console.log(miDiccionario.size);//devuelve la cantida de elementos en el diccionario
miDiccionario.forEach(function(v,k){
    console.log("llave: ",k," su edad es ",v);
});
console.log("=".repeat(40));
for (let k  of miDiccionario.keys()){
    console.log("llave",k,"la edad es ",miDiccionario.get(k));
}

