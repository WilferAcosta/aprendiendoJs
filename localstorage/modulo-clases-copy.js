import nombre, * as valores from './modulo-clases';//se usa * para que traiga todos los valores
//import {factorial,Pi as PII} from './modulo-clases-3';// lep ongo un alias al pi para poder usar el de moduloo3
import * as tres from './modulo-clases-3';
import {mensaje} from './modulo-mensaje';
console.log(valores.suma(2,3));
console.log(valores.PI);
console.log(tres.factorial(5));
console.log(tres.PI);
console.log(mensaje());
console.log(valores.spuntnik.promedi);
//instancia de la classs
console.log(valores.Camper.mensaje());
// muestra el nombre por defecto del modulo archivo1
console.log(nombre)