function compareTriplets(v1,v2){
    n=v1.length
    cont1=0;
    cont2=0;
    vTotal=[];
    for(let i=0;i<=n;i++){
        if(v1[i] > v2[i]){
            cont1++;
        }else if (v1[i] < v2[i]){
            cont2++;
        }
    }
    vTotal.push(cont1);
    vTotal.push(cont2);
    return vTotal;

}
a = [1, 2, 3]
b = [3, 2, 1]
console.log(compareTriplets(a,b));