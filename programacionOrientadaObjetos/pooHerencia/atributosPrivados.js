class Persona {
    #nombre;
    #sexo;
    constructor(nombre,sexo){
        this.#nombre = nombre;
        this.#sexo = sexo;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    };
    get nombre(){
        return this.#nombre;
    };
    set sexo(nuevoSexo){
        this.#sexo = nuevoSexo;
    };
    get sexo(){
        return this.#sexo;
    };
}
let p1= new Persona("wilfer","M");
console.log(p1);
p1.nombre = "acosta";
console.log(p1);