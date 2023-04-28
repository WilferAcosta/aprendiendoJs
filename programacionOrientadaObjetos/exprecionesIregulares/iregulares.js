const myRe = /d(b+)d/g;
let myArray = myRe.dotAll.exec('cdbbbbdsbz');
for (let exp of myArray){
    console.log(exp);
}


//escriba un exprecion regular que valide que un  telefono fijo este bien escito
//para colombia teniendo presente el indice +57

const myRe2 = /^(\+57)(60[1-8])(\d{7})$/g;
let valido = myRe2.test('+5760363636');
for(let exp of valido){
    console.log(exp);
}
