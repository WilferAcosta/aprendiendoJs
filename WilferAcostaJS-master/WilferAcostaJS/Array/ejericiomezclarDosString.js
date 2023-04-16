palabra1= ["ab", "c"];  
palabra2= ["a", "bc"];
let sonIguales = function(palabra1, palabra2) {
    return palabra1.join("") === palabra2.join("");
};
console.log(sonIguales(palabra1,palabra2));