export function delet(url, datos){
    fetch(url, {
        method: 'DELETE',
    })
    .then(response => {
        if(response.ok){
            console.log("el registro fue eliminado")
        }else {}
    })

}