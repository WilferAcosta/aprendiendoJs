function elevarAlCuadrado(vector){
    let [,...vector2]=vector2;//crear una copia del vector
    for(let i=0;i<vector2.length;i++){
        if(vector2[i]%2 !== 0){
            vector2[i]= vector2[i]**2;// o se peude asi vector[i]**=2
        }
    }
    return vector2;
}
let v = [2,5,6,7,-1,];
console.log(v)
let v2= elevarAlCuadrado(v);
console.log(v2);
console.log(v);
let [f,s,t,...r]=v;//forma te atraer la posicion del array
console.log(f,t);//imporimo la primera posicion y la tercera
console.log(f,r);//imprime la primera y el resto

//en paython
//v=[2,5,6,7,-1]
//