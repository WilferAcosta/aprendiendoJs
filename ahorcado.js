const palabras = ["ocupaciona","nervio","progresivo","papaya","caminar","esternocleidomastoideo","otorrinolaringólogo","idiosincrasia","esoxirribonucleico","paralelepípedo","ovoviviparo","caleidoscopio","electroencefalografista","hipopotomonstrosesquipedaliofobia","supercalifragilísticoespialidoso","funcional","hemiplejia","conducta","infantil","juvenil"];
console.log(palabras.length);
let nRando=(Math.floor(Math.random()*20));
console.log(nRando);
palabraAdivinar=palabras[nRando].split("");
console.log(palabraAdivinar);
cantidaIntentos=palabraAdivinar.length;
console.log(cantidaIntentos)
contadorIntentos=0;
const letra = prompt("Ingrese una letra");
const buscas=palabraAdivinar.includes(letra);

    for(let i=0;i<=cantidaIntentos;i++){
        if(buscas === true){
            console.log("voy bien");

        }
        
    }