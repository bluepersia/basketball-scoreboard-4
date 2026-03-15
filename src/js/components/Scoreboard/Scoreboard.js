import Score from "../Score/Score.js";
import { declareWinner, newState, timerTick } from "./utils.js";

export default function Scoreboard(root) {
  let state = newState();

  const home = Score(document.getElementById("home"));
  const guest = Score(document.getElementById("guest"));
  const announcementEl = document.getElementById("announcement");
  const newGameBtn = document.getElementById("new-game");

  newGameBtn.addEventListener("click", newGame);
  newGame();

  function newGame() {
    clearInterval(state.timer);
    state = newState();
    state.timer = setInterval(timerHandler, 1000);

    home.reset();
    guest.reset();

    renderTime();
  }

  function timerHandler() {
    state = timerTick(state);

    if (state.gameOver) {
      const winner = declareWinner(home.getScore(), guest.getScore());
      if (winner == "Tie") {
        announcementEl.textContent = winner;
      } else {
        announcementEl.textContent = `${winner} wins!`;
      }

      home.freezeThis();
      guest.freezeThis();

      return;
    }
    renderTime();
  }

  function renderTime() {
    announcementEl.textContent = `Time left: ${state.time}`;
  }
}
