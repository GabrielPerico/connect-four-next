"use client";

import { Player } from "@/types/enum";
import BlackBoard from "./BlackBoard";
import RowSelector from "./RowSelector";
import WhiteBoard from "./WhiteBoard";
import GameBoardContainer from "./GameBoardContainer";
import { twMerge } from "tailwind-merge";
import { useCallback, useRef } from "react";

interface GameBoardProps {
  className?: string;
}

const GameBoard: React.FC<GameBoardProps> = ({ className }) => {
  const rowSelectorRef = useRef<SVGSVGElement>(null);

  const onRowHover = useCallback((row: number, leftTranslate: number) => {
    if (!rowSelectorRef.current) return;

    rowSelectorRef.current.style.setProperty(
      "--tw-translate-x",
      `calc(-50% + ${leftTranslate}px)`,
    );
  }, []);

  return (
    <div className={twMerge("relative isolate aspect-[7/6] h-full", className)}>
      <GameBoardContainer onRowHover={onRowHover} />

      <WhiteBoard className="pointer-events-none absolute inset-0 z-[3] -mx-[2.65%] -mt-[2.75%] aspect-[632/584] select-none drop-shadow-[0_5px_0_rgba(0,0,0,0.5)]" />

      <BlackBoard className="pointer-events-none absolute inset-0 z-[1] -mx-[2.65%] -mt-[2.75%] aspect-[632/584] select-none drop-shadow-[0_10px_0_rgba(0,0,0,1)]" />

      <RowSelector
        className="opacity-0 peer-hover:opacity-100"
        ref={rowSelectorRef}
      />
    </div>
  );
};

export default GameBoard;
