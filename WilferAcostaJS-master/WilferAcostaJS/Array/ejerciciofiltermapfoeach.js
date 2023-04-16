const filterByLength = function(arr){
    let nuevoArr=[];
    arr.forEach(elemento =>{
      if(elemento.length>=4)nuevoArr.push(elemento);  
    });
    return nuevoArr;
  }
  let arr=['amor', 'sol', 'piedra', 'día'];
  console.log(filterByLength(arr));
  //filter
  let arr1=['amor', 'sol', 'piedra', 'día'];
  const filteredarr = nuevoArr.filter(function(e){
    return e.length >= 4;
  })
  console.log(filteredarr)
  //fucion flecha map
  const solo = nuevoArr=>{
    nuevoArr.map(elemento =>{if(elemento.length>=4)return elemento;})
  }