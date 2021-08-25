const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const pokemons = []

function salvarPokemons(pokemon) {
    if (!pokemon.id) pokemon.id = sequence.id
    pokemons[pokemon.id] = pokemon
    return pokemon
}

function mostrarPokemon(id) {
    return pokemons[id] || {}
}

function mostrarPokemons() {
    return Object.values(pokemons)
}

function atualizarPokemon(id, pokemon) {
    pokemons[id] = pokemon
    return pokemon
}

function deletarPokemon(id) {
    sequence._id = sequence._id - 1
    const pokemonDeletado = pokemons[id]
    pokemons.splice(id, 1)
    pokemons.forEach(pokemon => {
        if(pokemon.id > id) {
            pokemon.id = pokemon.id - 1
        }
    })
    return pokemonDeletado
}

function batalhaPokemon(id1, id2) {

    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0) {
        if(pokemon1.tipo == pokemon2.fraqueza) {
            pokemon2.hp = pokemon2.hp - superEfetivo
        } else if (pokemon1.tipo == pokemon2.resistencia) {
            pokemon2.hp = pokemon2.hp - naoEfetivo
        } else {
            pokemon2.hp = pokemon2.hp - efetivo
        }
    }

    if(pokemon1.hp != 0 && pokemon2.hp != 0) {
        if(pokemon2.tipo == pokemon1.fraqueza) {
            pokemon1.hp = pokemon1.hp - superEfetivo
        } else if (pokemon2.tipo == pokemon1.resistencia) {
            pokemon1.hp = pokemon1.hp - naoEfetivo
        } else {
            pokemon1.hp = pokemon1.hp - efetivo
        }
    }

    if(pokemon1.hp < 0) pokemon1.hp = 0
    if(pokemon2.hp < 0) pokemon2.hp = 0

    return `Pokemon 1: ${pokemon1.nome} HP: ${pokemon1.hp}\n\n$Pokemon 2: {pokemon2.nome} HP: ${pokemon2.hp}`
}

    function curarPokemon(id) {

        const pocaoHP = 20
        const pokemonCura = pokemons[id]
 
        if(pokemonCura.hp < 81) {
            pokemonCura.hp = pokemonCura.hp + pocaoHP
            return `Você ajudou a curar seu Pokemon e agora o HP de ${pokemonCura.nome} é ${pokemonCura.hp}.`
        } 
        
        if(pokemonCura.hp > 80 && pokemonCura.hp < 100) {
            pokemonCura.hp = 100
            return `Você ajudou a curar seu Pokemon e agora o HP de ${pokemonCura.nome} é ${pokemonCura.hp}.`   
        } else {
            return `${pokemonCura.nome} já está com a saúde totalmente recuperada, seu HP atingiu o limite de 100.`
        } 
      
}        

module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon, batalhaPokemon, curarPokemon }