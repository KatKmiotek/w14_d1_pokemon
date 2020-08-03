import React, {Component} from 'react';
import PokemonDetails from "../components/PokemonDetails.js";
import PokemonList from "../components/PokemonList.js";
import CapturedPokemon from "../components/CapturedPokemon.js";

class PokemonData extends Component{
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      selectedPokemon: "",
      capturedPokemon: []

    }
    this.handleSelectedPokemon = this.handleSelectedPokemon.bind(this);
    this.handleCapturePokemon = this.handleCapturePokemon.bind(this);
  }

  handleSelectedPokemon(selectedPokemon){
    fetch(selectedPokemon)
    .then(res => res.json())
    .then(data => this.setState({selectedPokemon: data}))
    .catch(err => console.error)

  }

  handleCapturePokemon(newPokemon){
    if(this.state.capturedPokemon.includes(newPokemon.name)){
      return;}
      else{
      const addedPokemon = [...this.state.capturedPokemon, newPokemon.name];
      this.setState({capturedPokemon: addedPokemon})}
  }

  componentDidMount(){
    fetch('http://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res => res.json())
    .then(data => this.setState({pokemons: data.results}))
    .catch(err => console.error)
  }

  render(){

    return(
      <div className="App">
      <h1> Pokemon </h1>
      <PokemonList pokemons={this.state.pokemons} onSelectedPokemon={this.handleSelectedPokemon}/>
      <PokemonDetails pokemon={this.state.selectedPokemon} onCaptureClick={this.handleCapturePokemon}/>
      <h4> Captured Pokemon </h4>
      <CapturedPokemon pokemons={this.state.capturedPokemon}/>
      </div>
    )
  }
}

export default PokemonData;
