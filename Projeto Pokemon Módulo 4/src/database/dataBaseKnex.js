const { default: knex } = require('knex')
const { databaseConnection } = require('./connection')

async function salvarPokemons(pokemon) {
    const insertPokemon = {
        nome_pokemon: pokemon.nome,
        tipo: pokemon.tipo,
        local_origem: pokemon.origem
    }

    const result = await databaseConnection('pokemons').insert(insertPokemon)

    console.log(result)

    if (result) {
        return {
            ...pokemon,
            id: result[0]
        }
    } else {
        console.error("Deu erro!")
        return { 
            error: "Deu erro na inserção"
        }
    }
}

async function mostrarPokemon(id) {
    const result = await databaseConnection('pokemons').where({ id })
    return result[0]
}

async function mostrarPokemons() {
    const result = await databaseConnection('pokemons')
    return result
}

async function atualizarPokemon(id, pokemon) {
 
    const updatePokemon = {
        nome_pokemon: pokemon.nome,
        tipo: pokemon.tipo,
        local_origem: pokemon.origem
    }

    const result = await databaseConnection('pokemons').where({ id }).update(updatePokemon)

    if (result) {
        return {
            ...pokemon,
            id
        }} else {
        console.error("Deu erro!")
        return { 
            error: "Deu erro na inserção"
        }
    }
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
  

module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon }