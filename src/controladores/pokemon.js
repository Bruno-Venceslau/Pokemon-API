const {listarPokemons, detalharPokemon} = require("utils-playground");

const listarPokemon = async (req, res) => {
    const {pagina} =  req.query;

    if(pagina) {
        let lista = await listarPokemons(pagina ?? 1);
        lista = lista.results
        return res.status(200).json(lista)
    }

}

const pokemonDetalhesId = async (req, res) =>{

    const {idPokemon} = req.params

    const pokemonDetalhado = await detalharPokemon(Number(idPokemon));

    const {id, name, height, weight, base_experience, forms, abilities, species} = pokemonDetalhado

   
    return res.status(200).json({id, name, height, weight, base_experience, forms, abilities, species})
}


const pokemonDeatlhesNome = async (req, res) =>{

    const {idOrName} = req.params

    const pokemonDetalhado = await detalharPokemon(idOrName);

    const {id, name, height, weight, base_experience, forms, abilities, species} = pokemonDetalhado

   
    return res.status(200).json({id, name, height, weight, base_experience, forms, abilities, species})
}

module.exports = {listarPokemon, pokemonDeatlhesNome}