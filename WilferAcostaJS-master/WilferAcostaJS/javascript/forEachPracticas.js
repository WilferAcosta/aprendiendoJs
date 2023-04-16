function iva(n,por){
    let resultado = new Array(n);
    for(let i=0;i<n.length;i++) {
      resultado[i] = Math.round(n[i]*por);
  }
    return resultado.join();
  }
  let n1=[1000,656];
  let por=0.19; 
  const res1=iva(n)
  console.log(res);
  //noraml
function iva(n){
    let resultado = new Array(n);
    for(let i=0;i<n.length;i++) {
      resultado[i] = Math.round(n[i]*0.19);
  }
    return resultado.join();
  }
  let n=[1000,656];
  const res=iva(n)
  console.log(res);
  /// forEach
  const porcentajes3=function(a,b){
    let vec=[];
    a.forEach(elemento =>{
      vec.push(Math.round(elemento*b))
    });
    return vec;
  }
  let a=[1000,656];
  let b=0.19;
  console.log(porcentajes3(a,b));
  //--------------map
  //anonima
  const porcentajemap=function(a,b){
    return a.map(e => Math.round(e*b));
  }
  //flecha
  const mimap=(a,b) => a.map(e => Math.round(e*b));
  
  //function porcentajes(arr,por){
  //  for(let i=0;i<arr.length;i++)
  //    vec.push(Math.round(arr[i]*0.19))
  //  return vec;
  //}