import React from 'react';
import PokemonIndexContainer from './pokemon_index_container';

class PokemonIndexItem extends React.Component {

  constructor () {
    super(props);
  }

  render () {
    return (
      <li className="pokemon-index">
        <img src={this.props.pokemon.image_url}></img>
        <label>{this.props.pokemon.name}</label>
      </li>
    );
  }
}

export default PokemonIndexItem;
