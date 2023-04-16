let arr =[1,2,3];
arr.forEach(function(element){//ejecuta una funcion para cada elemento del array se le aplique la funcion.
    console.log(element);
});


let arr2=[1,2,3];
let mapperdArr =arr2.map(function(element){//recorre toda la array pero crea otro array new.
    return element*2;
});
console.log(mapperdArr);

let arr3=[1,2,3,4,5];
let filteredarr = arr3.filter(function(element){//crea un nuevo array y saca elementos de la anterior.
    return element %2 === 0;
});
console.log(filteredarr);

let arr4=[1,2,3,4,5];
let sum= arr4.reduce(function(accumulator, currrentValue){// da un solo valor como resultado .recibe dos elementos acomulador y otro valor
    return accumulator+ currrentValue; 
    //return Math.max(accumulator,currrentValue); para sacar el mayor elemento de todos
    
});
console.log(sum);
//sacar el promedio
let arr5=[1,2,3,4,5];
let suma= arr5.reduce(function(accumulator, currrentValue){// da un solo valor como resultado .recibe dos elementos acomulador y otro valor
    return accumulator + currrentValue; 
    //return Math.max(accumulator,currrentValue); para sacar el mayor elemento de todos
    
});
let promedio= suma/arr.length;
console.log(promedio);
