const listarPokemons = function(){
    let xhttp = new XMLHttpRequest()
    let pokemons = document.getElementById('pokemons')
    pokemons.innerHTML = ""
    let urls = []

    for(let i = 0; i < 10; i++){
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
    }

    let responses = []

    urls.forEach((url)=>{
        xhttp.open('get', url, false)
        xhttp.send()
        responses.push(JSON.parse(xhttp.responseText))
    })

responses.forEach((pokemon)=>{
    let nodeId = pokemon.id

    let img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    img.className = 'img-fluid img-thumbnail'

    let xicon = document.createElement('i')
    xicon.className = 'bi bi-x-square'
    xicon.onclick = function(){
        pokemons.removeChild(document.getElementById(nodeId))
    }


    let id = document.createElement('p')
    id.innerHTML = `
    ID: ${pokemon.id} <br>
    Nome: ${pokemon.name} <br>
    `

    let div = document.createElement('div')
    div.className = 'col card bg-light'
    div.id = nodeId

    div.appendChild(id)
    div.appendChild(img)
    div.appendChild(xicon)

    pokemons.appendChild(div)

})

}