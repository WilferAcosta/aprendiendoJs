function mezclar(dato, indices) {
  const n = dato.length;
  let resultado = new Array(n);
  for (let i = 0; i < n; i++) {
   
    resultado[indices[i]] = dato[i];
  }
  return resultado.join("");
}
const dato = "abc";
const indices = [0, 1, 2];
const result = mezclar(dato, indices);
console.log(result);