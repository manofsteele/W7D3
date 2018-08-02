import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>React is working!!</h1>, root);
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
});
