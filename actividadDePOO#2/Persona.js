//Autor : Wilfer Orlando Acosta Rodriguez
// creao la clase padre Persona
class Persona{
    //creo los atribtos con sus modificador de acceso.
    #nombre
    #edad
    #genero
    // creo un funtion statica.
    static esMayorDeEdad;
    // creo el constructor y paso los atributos como argumentos.
    constructor(nombre,edad,genero){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#genero = genero;
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
    set setGenero(genero){
        this.#genero = genero;
    }
    get getGenero(){
        return this.#genero;
    }
    //creo los metodos
    saludar(){
        return `Bienvenido ${this.#nombre}`;
    }
    esMayorDeEdad(){
        return this.#edad >= 18 ? true : false;
    }
}
//creo instancia de la clase padre Persona
// persona1 = new Persona("Wilfer",28,"M");
// console.log(persona1)
// console.log(persona1.saludar());
// console.log(persona1.esMayorDeEdad());

//creo la clase hija que hereda de la clase padre Persona mediante extends
class Estudiante extends Persona{
    #carrera
    constructor(nombre,edad,genero,carrera){
        //uso del super para heredar sus atributos de la clase padre
        super(nombre,edad,genero);
        this.#carrera = carrera;
    }
    set setCarrera(carrera){
        this.#carrera = carrera;
    }
    get getCarrera(){
        return this.#carrera;
    }
    estudiar(){
        return `Esta estudiando la carrera ${this.#carrera}`;
    }
}

document.addEventListener('click',(e)=>{
    if(e.target.id=='sumit'){
        enviar();
    }
})
let estudiantes = [];
function enviar(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    let carrera = document.getElementById("carrera").value;
    estudiante1 = new Estudiante(nombre,edad,genero,carrera);
    alert("El estudiante es mayor de edad :  "+estudiante1.esMayorDeEdad());
    alert(estudiante1.saludar());
    alert(estudiante1.estudiar());
}


