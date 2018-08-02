import React from 'react';
import connect from './pokemon_index_container';
import {selectAllPokemon} from '../../reducers/selectors';
import {requestAllPokemon} from '../../actions/pokemon_actions';

class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map((pokemon) => <li className="pokemon-index" key={pokemon.id}><img src={pokemon.image_url}></img><label>{pokemon.name}</label></li>)}
      </ul>
    );
  }
}

export default PokemonIndex;
