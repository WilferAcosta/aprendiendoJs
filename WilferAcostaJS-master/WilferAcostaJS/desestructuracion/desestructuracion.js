const vector = [1,2,3];
const [a,b,c] =vector;
console.log(a);
console.log(b);
console.log(c);
//sintaxis.con[...] da el primero y lso restantes.
const [a, ...b]=vector;
console.log(a);
console.log(b);

//una funcion se peude usar la desustruracion para entraer un vlaor de una arreglo como parametro de una funcion.
const perfil =["comida","sofele"];
function obtenerInforUsuario([nombre,apellido]){
    return "mi nombre es${nombre} ${apellido}";
}
//invocar la funcion:
obtenerInforUsuario(perfil);
//ejemplo del de funciuones
let v =["uno","dos","tres"];
let x=["lun","mar","mier","jue"];

function prueba([param1,param2,otros1],[param3,otros2]){
    console.log(`primera entrada ${param1} ${param2} ${otros1}`);
    console.log(`primera entrada ${param3} ${otros2}`);
}
console.log(prueba(v,x));