const form = document.querySelector("form")
const input = document.querySelector("busca")
const tela = document.querySelector("tela")

form.addEventListener("submit", event => {
    event.preventDefault()
    
    const pokemon = busca.value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        display.innerHTML = `
        
        <p>Nome do Pokemon buscado: ${data.name}</p>
        <img src="${data.sprites.front_default}" alt="imagem do ${data.name}">
        `
    });
})

