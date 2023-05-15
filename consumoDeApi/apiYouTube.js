async function buscar() {
    const buscar = document.getElementById("buscar").value;
    const url =
    "https://youtube138.p.rapidapi.com/channel/videos/?id=KO1s1uMqgeM&hl=en&gl=US";
    const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
    };
    try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    } catch (error) {
    console.error(error);
    }
}
