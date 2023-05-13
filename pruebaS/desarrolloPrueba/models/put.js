export function put(url, datos){
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        if(data !== undefined){
            fetch(url,{
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
        }else {
            alert("el resgistro no existe")
        }
    })
    .catch(error=>{
        console.log(error)
    })
}