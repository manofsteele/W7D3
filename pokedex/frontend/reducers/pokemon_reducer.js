import React from 'react';
import Redux from 'redux';
import merge from 'lodash/merge';

import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;

    default:
      return state;

  }
};

export default pokemonReducer;
