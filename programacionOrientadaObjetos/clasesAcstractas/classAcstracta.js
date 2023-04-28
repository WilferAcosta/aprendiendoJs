class ClassAbstractas{
    constructor(){
        if (new.target === ClassAbstractas){
            throw new Error("No se puede crear una instacia de esta clase.");
        }

    }
    metodoNormal(){
        console.log("Ejercucion del metodo normal");
    }
    metodoAbstracto(){
        throw new Error("EL metodo no ha sido implementado.")
    }
}
class HijaAbstracta extends ClassAbstractas{
    metodoAbstracto(){
        console.log("ejecutando del metodo abstracto");
    }
}

let instHija = new HijaAbstracta();
instHija.metodoNormal();
instHija.metodoAbstracto();