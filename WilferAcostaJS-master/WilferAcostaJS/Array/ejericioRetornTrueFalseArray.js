/// ejericio que retorna true o false si esta un elemento en el vector
function existeVector(vector,elem){
    for(let i =0;i<vector.length;i++)
        if (vector[i] === elem)
        return true;
    return false;
}
let v=[10,2,13,4,25,"acosta","banana","car","ana"];
console.log(v);
let v2= existeVector(v, "car");
console.log(v2);