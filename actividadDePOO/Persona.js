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
    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    setEdad(edad){
        this.#edad = edad;
    }
    getEdad(){
        return this.#edad;
    }
    setGenero(genero){
        this.#genero = genero;
    }
    getGenero(){
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
    setCarrera(carrera){
        this.#carrera = carrera;
    }
    getCarrera(){
        return this.#carrera;
    }
    estudiar(){
        return `Esta estudiando la carrera ${this.#carrera}`;
    }
}
//creo una instancia de la clase hija Estudiante
estudiante1 = new Estudiante("Orlando",29,"M","Ingeneria De Sistemas");
console.log(estudiante1);
console.log(estudiante1.saludar());
console.log(estudiante1.estudiar());
console.log(estudiante1.esMayorDeEdad());

