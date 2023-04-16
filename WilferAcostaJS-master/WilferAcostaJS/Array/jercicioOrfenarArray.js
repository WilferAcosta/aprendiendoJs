//archivo para ordenar metodo burbuja
function miSort(vector){
    let len = vector.length;
    for (let i=0 ; i < len; i++){
        for (let j=0;j < len - 1; j++){
            if (vector[j] > vector[j+1]){
                let tmp = vector[j];
                vector[j]= vector[j+1];
                vector[j+1]=tmp;
            }
        }
    }
    return vector ;
}
let v=[10,2,13,4,25,"acosta","banana","car","ana"];
console.log(v);
let v2= miSort(v);
console.log(v2);