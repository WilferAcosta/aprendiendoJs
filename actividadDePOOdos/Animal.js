//Autor : Wilfer Orlando Acosta Rodriguez

// creao la clase padre Persona
class Animal{
    //creo los atribtos con sus modificador de acceso.
    #nombre
    #edad
    // creo un funtion statica.
    static esMayorDeEdad;
    // creo el constructor y paso los atributos como argumentos.
    constructor({nombre="loro",edad=5}){
        this.#nombre = nombre;
        this.#edad = edad;
        
    }
    //creo el encapsulamiento de mis atributos con los metodos get y set
    set setNombre(nombre){
        this.#nombre = nombre;
    }
    get getNombre(){
        return this.#nombre;
    }
    set setEdad(edad){
        this.#edad = edad;
    }
    get getEdad(){
        return this.#edad;
    }
    //creo los metodos
    hacerSonido(){
        return "el animal esta haciendo un ruido"
    }
}
// animal1= new Animal({nombre : "vaca",edad : 5});
// animal1.hacerSonido();

//creo la clase hija que hereda de la clase padre Persona mediante extends
class Perro extends Animal{
    #raza
    constructor({nombre,edad,raza}){
        //uso del super para heredar sus atributos de la clase padre
        super({nombre,edad});
        this.#raza = raza;
    }
    set setRaza(raza){
        this.#raza = raza;
    }
    get getRaza(){
        return this.#raza;
    }

    moverCola(){
        return `El perro esta moviendo la cola`;
    }
}

document.addEventListener('click',(e)=>{
    if(e.target.id=='sumit'){
        enviar();
    }
})

function enviar(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let raza = document.getElementById("raza").value;
    let perro1 = new Perro({nombre,edad,raza});
    alert(perro1.moverCola());
    alert(`El animal se llama ${perro1.getNombre}`);
    
}


