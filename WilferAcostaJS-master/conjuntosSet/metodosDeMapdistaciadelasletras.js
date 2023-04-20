function distaciaLetras(s,distance){
    const DLETRAS =new Map();
    for(let i =0;i<=s.length;++i){
        let letra =s.charAt(i);
        if(DLETRAS.has(letra)){
            d =i -DLETRAS.get(letra)-1;
            if(d >= 0){
                pos = letra.charCodeAt(0)-97
                if(d !== distance[pos])
                return false;
            }
        }else {
            DLETRAS.set(letra , i);
        }
    }
    return true;
}

let s="abaccd";
let distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let rta = distaciaLetras(s,distance);
console.log(rta);