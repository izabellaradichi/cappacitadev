const { databaseConnection } = require('./connection')

async function salvarPokemons(pokemon) {
    /* 
    pokemon == {
        nome: 'Pikachu',
        tipo: 'Elétrico'
    }
    */  

    const queryInsertPokemon = `INSERT INTO pokemons(nome_pokemon, tipo) VALUES ('${pokemon.nome}', '${pokemon.tipo}')`

    const result = await databaseConnection.raw(queryInsertPokemon)

    if (result) {
        return {
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            id: result[0].insertId
        }
    } else {
        console.error("Deu erro!")
        return { 
            error: "Deu erro na inserção"
        }
    }
}

async function mostrarPokemon(id) {
    const querySelectPokemon = `SELECT * FROM pokemons WHERE id = ${id}`

    const result = await databaseConnection.raw(querySelectPokemon)

    return result[0]
}

async function mostrarPokemons() {
    const querySelectPokemon = `SELECT * FROM pokemons`

    const result = await databaseConnection.raw(querySelectPokemon)

    return result[0]
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


module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon }