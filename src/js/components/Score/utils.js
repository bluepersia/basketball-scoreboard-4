function newState() {
  return {
    score: 0,
    isFrozen: false,
  };
}

function add(state, quantity) {
  if (state.isFrozen) {
    return state;
  }
  return {
    ...state,
    score: state.score + quantity,
  };
}

function freeze(state) {
  return { ...state, isFrozen: true };
}

function unFreeze(state) {
  return { ...state, isFrozen: false };
}

export { newState, add, freeze, unFreeze };
