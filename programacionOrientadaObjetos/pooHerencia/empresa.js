class Empresa{
    #name
    #identificacion
    constructor(name,identificacion){
        this.#name = name;
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

}
class Empleados extends Empresa{
    #edad;
    #salario
    constructor(name,ident,edad,salario,Experiencia){
        super(name,ident);
        this.#edad=edad;
        this.#salario=salario;
    }
    set edad(nuevaEdad){
        this.#edad=nuevaEdad;
    }
    get edad(){
        return this.#edad
    }
    set salario(nuevoSalario){
        this.#salario=nuevoSalario;
    }
    get salario(){
        return this.#salario;
    }
}
class Experiencia{
    #descripcion
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
class Clientes extends Empresa{
    #telefono
    #correo
    constructor(name,ident,telefono,correo){
        super(name,ident);
        this.#telefono = telefono;
        this.#correo = correo;
    }
}