export class Libro{
    #categoria; #autor ;#isbn; #titulo; #cantidad;
    constructor(categoria,autor,isbn,titulo,cantidad){

        this.#categoria =categoria;
        this.#isbn = isbn;
        this.#autor = autor;
        this.#titulo =titulo;
        this.#cantidad = cantidad;
    }

    
    
}