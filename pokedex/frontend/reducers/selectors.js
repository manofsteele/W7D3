import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return state.entities.pokemon.values;
};
