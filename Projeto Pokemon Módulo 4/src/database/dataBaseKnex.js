const { default: knex } = require('knex')
const { databaseConnection } = require('./connection')

const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const pokemons = []

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

async function deletarPokemon(id) {
    
    const result = await databaseConnection('pokemons').where({ id }).del()
        
    return result[0]
}
  

module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon }