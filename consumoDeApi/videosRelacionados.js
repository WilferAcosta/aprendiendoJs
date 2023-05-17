export async function videoRelacionados(id){
	const url = `https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=US`;
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	let body3 = "";
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	result.contents.forEach(e=>{
		body3 += `<div><iframe width="100%" height="500" src="https://www.youtube.com/embed/${e.video.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`
	});
	return document.getElementById("body").innerHTML = body3;
} catch (error) {
	console.error(error);
}
}