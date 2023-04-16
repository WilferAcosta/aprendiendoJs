let mayorElemento = vector =>{
    if(vector.length === 0)
        return null;
    
    let mayor = vector[0];
    for(let i =0;i<vector.length;i++){
        if (vector[i]> mayor)// y si quiero el menor cambio > a <
            mayor= vector[i];
        
    }
    return mayor
}
let v=[1,2,3,4,5,"acosta","banana","car","ana"];
let v2= mayorElemento(v);
console.log(v2);