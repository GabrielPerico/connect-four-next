"use client";

import ActionButton from "@/app/_components/ActionButton";
import { currentPlayer, playerTimer, resetGame, winner } from "@/store/game";
import { Player } from "@/types/enum";
import { twMerge } from "tailwind-merge";
import WinnerBanner from "./WinnerBanner";
import { useCallback } from "@preact-signals/safe-react/react";

interface TimerProps {
  className?: string;
}

const fixedClasses = {
  1: "fill-red-400",
  2: "fill-yellow-400 ",
  3: "fill-white",
  4: "fillBlack",
};

const Timer: React.FC<TimerProps> = ({ className }) => {
  const winnerValue = winner.value;

  const handleResetGame = useCallback(() => {
    resetGame(true);
  }, []);

  if (winnerValue !== null) {
    const winnerText =
      winnerValue === Player.One
        ? "Player 1"
        : winnerValue === Player.Two
          ? "Player 2"
          : null;

    return (
      <div
        className={twMerge(
          "relative flex flex-shrink-0 items-center justify-center",
          className,
        )}
      >
        <WinnerBanner key="winnerBanner" />

        <div className="default-shadow flex flex-col gap-2 rounded-xl bg-white px-20 py-4 text-center text-3xl font-bold">
          <p className="heading-xs">{winnerText}</p>

          <h3 className="heading-l">WINS</h3>

          <ActionButton onClick={handleResetGame}>Play Again</ActionButton>
        </div>
      </div>
    );
  }

  const playerClass = fixedClasses[currentPlayer.value];

  const timeText = playerTimer.value + "s";
  const title =
    currentPlayer.value === Player.One ? "Player's 1 turn" : "Player's 2 turn";

  return (
    <div
      className={twMerge(
        "relative flex flex-shrink-0 items-center justify-center",
        className,
      )}
    >
      <WinnerBanner key="winnerBanner" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="164"
        viewBox="0 0 199 157"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        className="overflow-visible"
      >
        <path
          className={twMerge(
            "no-outlineShadow fill-red-400 transition",
            playerClass,
          )}
          d="M90.5032,4.40755L15.4627,36.0035C7.30484,39.4384,2,47.4279,2,56.2795L2,133c0,12.15,9.8497,22,22,22h151c12.15,0,22-9.85,22-22v-76.6667c0-8.8814-5.34-16.8917-13.538-20.3077L107.502,4.37583c-5.442-2.26736-11.5656-2.25593-16.9988.03172Z"
          stroke="#000"
          strokeWidth="4px"
        ></path>
        <text
          dx="50%"
          dy="59.966629"
          fontFamily="inherit"
          fontSize="16"
          fontWeight="700"
          strokeWidth="0"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          <tspan
            className="timer-text transition"
            y="0"
            fontWeight="700"
            strokeWidth="0"
          >
            {title}
          </tspan>
        </text>
        <text
          dx="50%"
          dy="111.157181"
          fontFamily="inherit"
          fontSize="56"
          fontWeight="700"
          strokeWidth="0"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          <tspan
            id="timer-text"
            className="timer-text transition"
            y="0"
            fontWeight="700"
            strokeWidth="0"
          >
            {timeText}
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default Timer;
