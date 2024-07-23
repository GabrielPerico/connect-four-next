"use client";

import ActionButton from "@/app/_components/ActionButton";
import Connect4Icon from "@/app/_components/Connect4Icon";
import { resetGame, stopTimer, winner } from "@/store/game";
import { useCallback, useEffect } from "@preact-signals/safe-react/react";
import { twMerge } from "tailwind-merge";
import PauseMenu from "./PauseMenu";
import { menuOpen } from "@/store/state";
import { loadLocalStorage } from "@/store/scoreboard";

interface GameHeaderProps {
  className?: string;
}

const GameHeader: React.FC<GameHeaderProps> = ({ className }) => {
  useEffect(() => {
    loadLocalStorage();
    resetGame();
  }, []);

  const handleResetGame = useCallback(() => {
    resetGame(winner.value !== null);
  }, []);

  const handleOpenMenu = useCallback(() => {
    menuOpen.value = !menuOpen.value;
  }, []);

  return (
    <>
      <div
        className={twMerge(
          "flex w-full flex-shrink-0 items-center justify-between",
          className,
        )}
      >
        <span className="flex basis-[33.3%]">
          <ActionButton onClick={handleOpenMenu}>menu</ActionButton>
        </span>

        <Connect4Icon />

        <span className="flex basis-[33.3%] items-center justify-end">
          <ActionButton onClick={handleResetGame}>restart</ActionButton>
        </span>
      </div>

      <PauseMenu open={menuOpen.value} />
    </>
  );
};

export default GameHeader;
