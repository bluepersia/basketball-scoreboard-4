function newState() {
  return {
    time: 10,
    timer: null,
    gameOver: false,
  };
}

function timerTick(state) {
  if (state.time <= 1) {
    return {
      ...state,
      time: 0,
      gameOver: true,
    };
  }

  return {
    ...state,
    time: state.time - 1,
  };
}

function declareWinner(homeScore, guestScore) {
  return homeScore === guestScore
    ? "Tie"
    : homeScore > guestScore
    ? "Home"
    : "Guest";
}
export { newState, timerTick, declareWinner };
