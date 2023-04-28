//clase Personas
class Personas{
    #name
    #edad
    #ident
    constructor(name,edad,identificacion){
        this.#name = name;
        this.#edad = edad;
        this.#ident = identificacion;
        
    };
    set name(nuevoName){
        this.#name = nuevoName;
    };
    get name(){
        return this.#name;
    };
    set ident(nuevoIdent){
        this.#ident = nuevoIdent;
    };
    get ident(){
        return this.#ident;
    };
    set edad(nuevaedad){
        this.#edad= nuevaedad;
    }
    get edad(){
        return this.#edad;
    }
}
// class abstracta de Personas
class Empresa{
    #nameE
    #nit
    constructor(nameE,nit,Personas){
        this.#nameE = nameE;
        this.#nit= nit;
    }
    set nameE(nuevoNameE){
        this.#nameE = nuevoNameE;
    }
    get nameE(){
        return this.#nameE;
    }
    set nit(nuevoNit){
        this.#nit = nit;
    }
    get nit(){
        return this.#nit;
    }
    incluir(){

    };
    modificar(){

    };
    eliminar(){

    };
    increSalario(){

    };
    sanciones(){

    };
}


class Empleados extends Personas{
    #salario
    constructor(name,edad,ident,salario,Experiencia){
        super(name,edad,ident);
        this.#salario = salario;
    }
    set salario(nuevoSalario){
        this.#salario = nuevoSalario;
    }
    get salario(){
        return this.#salario;
    }     
}
class Experiencia{
    #descri
    #tiempo
    constructor(descripcion,tiempo){
        this.#descri=descripcion;
        this.#tiempo=tiempo;
    }
    set descri(nuevaDescri){
        this.#descri = nuevaDescri;
    }
    get descri(){
        return this.#descri;
    }
    set tiempo(nuevoTiempo){
        this.#tiempo = nuevoTiempo;
    }
    get tiempo(){
        return this.#tiempo;
    }
}
class Clientes extends Personas{
    #telefono
    #correo
    constructor(name,ident,telefono,correo){
        super(name,edad,ident);
        this.#telefono = telefono;
        this.#correo = correo;
    }
    set telefono(nuevoTel){
        this.#telefono= nuevoTel;
    }
    get telefono(){
        return this.#telefono;
    }
    set correo(nuevoCorreo){
        this.#correo = nuevoCorreo;
    }
    get correo(){
        return this.#correo;
    }
}
let exp1 = new Experiencia("Programador","2 años");
const emple1 = new Empleados("wilfer",28,11101693233,4_000_000,exp1);
const empresa1= new Empresa("CAMPUS",123,emple1);
console.log(empresa1);
