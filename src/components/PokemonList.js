import React from 'react';

const PokemonList = (props) => {

  const pokemonOptions = props.pokemons.map(pokemon => {
    return <option value={pokemon.url} key={pokemon.url}>{pokemon.name}</option>
  })

  function handleSelect(event){
    props.onSelectedPokemon(event.target.value)
  }

  return(
    <select defaultValue="default" onChange={handleSelect}>
      <option disabled value="default">Select Pokemon</option>
      {pokemonOptions}
    </select>
  )
}

export default PokemonList;
