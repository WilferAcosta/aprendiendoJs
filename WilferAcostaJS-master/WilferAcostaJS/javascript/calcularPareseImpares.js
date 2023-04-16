const proImpares=function(ini,fin){
    let prod = 1;
    console.log("NUM \t\t PRODUCTO")
    console.log("-".repeat(20));
    for(let i=ini;i<=fin;i++){
        prod *=(i % 2 !== 0)? i : 1;
        if(i%2 !== 0){
            prod*=i;
            console.log(`${i} \t\t\t ${prod}`);
        }
        console.log()
    }
    return prod;
}
console.log(proImpares(1,15));