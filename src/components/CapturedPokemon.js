import React from 'react';

const CapturedPokemon = (props) => {

  if(!props.pokemons) return null;

  const captureList = props.pokemons.map(pokemon => {
    return <p>{pokemon}</p>
  })

  return (
    <div>
    
    {captureList}
    </div>

  )
}

export default CapturedPokemon;
