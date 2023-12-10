const express = require("express");
const rotas = express();
const pokemons = require("./controladores/pokemon")

rotas.get("/pokemons", pokemons.listarPokemon);
rotas.get("/pokemons/:idOrName", pokemons.pokemonDetalhes);

module.exports = rotas