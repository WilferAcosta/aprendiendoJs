
async function buscar() {
    const buscar = document.getElementById("buscar").value;
    const url = `https://youtube138.p.rapidapi.com/search/?q=${buscar}&hl=en&gl=US`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
try {
	let body= "";
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result);
	const id = result.contents[1].video.videoId;
    document.getElementById("video").innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    result.forEach(e =>{
		console.log(result.contents[e+2].video.videoId);
		body += `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${result.contents[e+2].video.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
	});
	document.getElementById("body").innerHTML += body ;
    
} catch (error) {
	console.error(error);
}
}
// async function descripVideo(id){

// }

