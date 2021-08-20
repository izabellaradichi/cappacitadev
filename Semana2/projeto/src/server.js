const express = require('express');
const app = express();
const dataBase = require('./dataBase.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/pokemons',(req, res) =>  
    res.send(dataBase.mostrarPokemons())
)

app.get('/pokemons/:id',(req, res) => 
    res.send(dataBase.mostrarPokemon(req.params.id))
)

app.post('/pokemons', (req, res) => {
    const pokemon = dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
})

app.put('/pokemons/:id', (req, res) => {
    const pokemon = dataBase.atualizarPokemon(req.params.id, { 
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)
    })
    res.send(pokemon)
})

app.delete('/pokemons/:id', (req, res) => {
   res.send(dataBase.deletarPokemon(req.params.id))
})

app.post('/batalha', (req, res) => {
    res.send(dataBase.batalhaPokemon(req.body.id1, req.body.id2))
})

app.post('/curar', (req, res) => {
    res.send(dataBase.curarPokemon(req.body.id))
})

app.listen(3003);