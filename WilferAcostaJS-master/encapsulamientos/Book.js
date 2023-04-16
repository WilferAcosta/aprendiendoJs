export class Book{
    #categoria; 
    #autor ;
    #isbn; 
    #titulo;
    #cantidad
    constructor(categoria,autor,isbn,titulo,cantidad){
        this.#categoria = categoria;
        this.#autor = autor;
        this.#isbn = isbn;
        this.#titulo =titulo;
        this.#cantidad = cantidad;
    }
    get getCategoria(){
        return this.#categoria;
    }
    set setCategoria(vCategoria){
        this.#categoria = vCategoria;
        return
    }
    get getAutor(){
        return this.#autor;
    }
    set setAutor(vAutor){
        this.#autor = vAutor;
        return
    }
    get getIsbn(){
        return this.#isbn;
    }
    set setIsbn(vIsbn){
        this.#isbn = vIsbn;
        return
    }
    get getTitulo(){
        return this.#titulo;
    }
    set setTitulo(vTitulo){
        this.#titulo = vTitulo
        return 
    }
    get getCantidad(){
        return this.#cantidad;
    }
    set setCantidad(vCantidad){
        this.#cantidad = vCantidad;
    }
    compra(nCantidad){
        this.#cantidad += nCantidad;
    }
    
}