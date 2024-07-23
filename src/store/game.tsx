import { GameState, Player } from "@/types/enum";
import { signal } from "@preact-signals/safe-react";
import { incrementScore, lastPlayer, setLastPlayer } from "./scoreboard";

type Array6<T> = [T, T, T, T, T, T];
type Array7<T> = [T, T, T, T, T, T, T];

type GameBoardType = Array7<Array6<Player | 0>>;

const gameBoard = signal<GameBoardType>(
  Array.from({ length: 7 }, () =>
    Array.from({ length: 6 }, () => 0),
  ) as GameBoardType,
);

const gameState = signal(GameState.Paused);

const currentPlayer = signal(Player.One);

const winner = signal<Player | null | -1>(null);
const winnerCells = signal<[number, number][]>([]);

const playerTimer = signal(0);
const playerTimerInterval = signal<NodeJS.Timeout | null>(null);

// Reset the game
const resetGame = (newGame = false) => {
  gameBoard.value = Array.from({ length: 7 }, () =>
    Array.from({ length: 6 }, () => 0),
  ) as GameBoardType;

  if (newGame) {
    if (lastPlayer.value === Player.One) {
      currentPlayer.value = Player.Two;
      setLastPlayer(Player.Two);
    } else {
      currentPlayer.value = Player.One;
      setLastPlayer(Player.One);
    }
  } else {
    currentPlayer.value = lastPlayer.value;
  }

  winner.value = null;
  winnerCells.value = [];

  gameState.value = GameState.Playing;

  startTimer(true);
};

// Add chip to the board
const addChip = (column: number) => {
  const board = gameBoard.value;

  if (winner.value !== null) {
    return;
  }

  for (let i = 5; i >= 0; i--) {
    if (board[column][i] === 0) {
      board[column][i] = currentPlayer.value;

      gameBoard.value = structuredClone(board);
      checkWinnerMove(column, i, currentPlayer.value);

      if (winner.value === null) {
        startTimer(true);
        currentPlayer.value =
          currentPlayer.value === Player.One ? Player.Two : Player.One;
      }

      return;
    }
  }
};

// check winner
const checkWinnerMove = (x: number, y: number, player: Player) => {
  // Check columns surrounding the last move and save the winner and the winning cells
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (const [dx, dy] of directions) {
    let count = 1;
    const cells: [number, number][] = [[x, y]];

    for (let i = -1; i <= 1; i += 2) {
      for (let j = 1; j <= 3; j++) {
        const nx = x + dx * i * j;
        const ny = y + dy * i * j;

        if (
          nx < 0 ||
          nx >= 7 ||
          ny < 0 ||
          ny >= 6 ||
          gameBoard.value[nx][ny] !== player
        ) {
          break;
        }

        count++;
        cells.push([nx, ny]);
      }
    }

    if (count >= 4) {
      winner.value = player;
      winnerCells.value = cells;

      incrementScore(player);

      gameState.value = GameState.Paused;

      return;
    }
  }
};

// check draw
gameBoard.subscribe((board) => {
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 6; y++) {
      if (board[x][y] === 0) {
        return;
      }
    }
  }

  winner.value = -1;
});

// start the timer
const startTimer = (resetTime = false) => {
  const createInterval = () => {
    playerTimerInterval.value = setInterval(() => {
      playerTimer.value -= 1;

      if (playerTimer.value < 0) {
        clearInterval(playerTimerInterval.value as NodeJS.Timeout);
        playerTimerInterval.value = null;

        currentPlayer.value =
          currentPlayer.value === Player.One ? Player.Two : Player.One;

        startTimer(true);
      }
    }, 1000);
  };

  if (resetTime) {
    playerTimer.value = 30;
  }

  if (playerTimerInterval.value !== null) {
    clearInterval(playerTimerInterval.value as NodeJS.Timeout);
    playerTimerInterval.value = null;

    createInterval();

    return;
  }

  createInterval();
};

const stopTimer = () => {
  clearInterval(playerTimerInterval.value as NodeJS.Timeout);
  playerTimerInterval.value = null;
};

export {
  gameBoard,
  gameState,
  currentPlayer,
  winner,
  playerTimer,
  playerTimerInterval,
  winnerCells,
  resetGame,
  addChip,
  startTimer,
  stopTimer,
};
