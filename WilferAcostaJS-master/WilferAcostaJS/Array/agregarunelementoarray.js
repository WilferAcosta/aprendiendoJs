let arr =[1,2,3];//agregar
arr.push(4);
console.log(arr);
let lastElemnt = arr.pop();//elimina el ultimo elemento
console.log(lastElemnt);
console.log(arr);
let frstElement= arr.shift();//elimina el primer elemento del vector
console.log(frstElement);
console.log(arr);
arr.unshift(0,-1);
console.log(arr);//agrega un elemento al inicio del array
let arr2=[1,2,3,4,5];
let slicedArr= arr2.slice(1,4)//se usa para que traiga desde la pocision a otra pero la ultima no se incluye
console.log(slicedArr);
console.log(arr);
let arr3=[1,2,3];
let arr4=[4,5,6];
let newArr = arr3.concat(arr4);///conccatenar unir dos arreglos
console.log(newArr);
let ar =['apple','banana','orange'];
let str=ar.join(', ');/// unir en un solo string
console.log(str);
let index = ar.indexOf('banana');//busca un elemento si encuentra devuelve la posicion si no la encuantra devuelve -1
console.log(index);
