const { listarPokemons, detalharPokemon } = require("utils-playground");

const listarPokemon = async (req, res) => {
  const { pagina } = req.query;

  try {
    let lista = await listarPokemons(pagina ?? 1);
    lista = lista.results;
    return res.status(200).json(lista);

  } catch (erro) {
    return res.status(404).json(erro.message);
  }
};

const pokemonDetalhes = async (req, res) => {
  const { idOrName } = req.params;

  try {
    const detalhes = await detalharPokemon(idOrName);

    const pokemonDetalhado = {
      id: detalhes.id,
      name: detalhes.name,
      height: detalhes.height,
      weight: detalhes.weight,
      base_experience: detalhes.base_experience,
      forms: detalhes.forms,
      abilities: detalhes.abilities,
      species: detalhes.species,
    };

    return res.status(200).json(pokemonDetalhado);
    
  } catch (erro) {
    return res.status(404).json({ Erro: erro.message });
  }

};

module.exports = { listarPokemon, pokemonDetalhes };
