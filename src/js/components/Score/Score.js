import { add, freeze, newState, unFreeze } from "./utils.js";

export default function Score(root) {
  let state = newState();

  const countEl = root.querySelector("[data-count]");
  const plusOneBtn = root.querySelector("[data-plus-one]");
  const plusTwoBtn = root.querySelector("[data-plus-two]");
  const plusThreeBtn = root.querySelector("[data-plus-three]");

  plusOneBtn.addEventListener("click", handlePlusOne);
  plusTwoBtn.addEventListener("click", handlePlusTwo);
  plusThreeBtn.addEventListener("click", handlePlusThree);

  function handlePlusOne() {
    state = add(state, 1);
    renderScore();
  }

  function handlePlusTwo() {
    state = add(state, 2);
    renderScore();
  }

  function handlePlusThree() {
    state = add(state, 3);
    renderScore();
  }

  function freezeThis() {
    state = freeze(state);
  }
  function reset() {
    state = newState();
    renderScore();
  }

  function renderScore() {
    countEl.textContent = state.score;
  }

  function getScore() {
    return state.score;
  }

  return {
    getScore,
    freezeThis,
    reset,
  };
}
