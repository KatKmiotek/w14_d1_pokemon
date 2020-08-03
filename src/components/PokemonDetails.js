import React from 'react';

const PokemonDetails = (props) => {

if(!props.pokemon) return null;

  const pokemonTypes = props.pokemon.types.map(type => {
    return <li>{type.type.name}</li>
  })

  function capturePokemon(){
    props.onCaptureClick(props.pokemon)
  }



  return(
      <div>
      <h2> {props.pokemon.name} </h2>
      <img src={props.pokemon.sprites.other.dream_world.front_default} alt="pokemon" height="200"/>
      <p> Pokemon Types </p>
      <ul>
      {pokemonTypes}
      </ul>
      <button onClick={capturePokemon}>Capture Pokemon </button>

      </div>
  )
}

export default PokemonDetails;
