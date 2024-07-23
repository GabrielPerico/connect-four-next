"use client";

import { Player } from "@/types/enum";
import { signal } from "@preact-signals/safe-react";

const localStorage = (() => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
})();

const player1Score = signal(0);

const player2Score = signal(0);

const lastPlayer = signal(Player.One);

const resetScore = () => {
  player1Score.value = 0;
  player2Score.value = 0;
  lastPlayer.value = Player.One;
  localStorage?.setItem("player1Score", "0");
  localStorage?.setItem("player2Score", "0");
  localStorage?.setItem("lastPlayer", Player.One.toString());
};

const incrementScore = (player: 1 | 2) => {
  if (player === 1) {
    player1Score.value++;
    localStorage?.setItem("player1Score", player1Score.value.toString());
  } else {
    player2Score.value++;
    localStorage?.setItem("player2Score", player2Score.value.toString());
  }
};

const setLastPlayer = (player: Player) => {
  lastPlayer.value = player;
  localStorage?.setItem("lastPlayer", player.toString());
};

const loadLocalStorage = () => {
  if (!localStorage) return;

  player1Score.value = Number(localStorage.getItem("player1Score") || 0);
  player2Score.value = Number(localStorage.getItem("player2Score") || 0);
  lastPlayer.value = Number(localStorage.getItem("lastPlayer") || Player.One);
};

export {
  player1Score,
  player2Score,
  lastPlayer,
  resetScore,
  incrementScore,
  setLastPlayer,
  loadLocalStorage,
};
