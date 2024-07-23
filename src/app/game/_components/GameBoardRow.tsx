"use client";

import { addChip, gameBoard, winnerCells } from "@/store/game";
import Circle from "./Circle";
import { useCallback, useLayoutEffect } from "@preact-signals/safe-react/react";
import { useRef, useState } from "react";

interface GameBoardRowProps {
  row: number;
  onRowHover: (row: number, leftTranslate: number) => void;
}

const GameBoardRow: React.FC<GameBoardRowProps> = ({ row, onRowHover }) => {
  const [startY, setStartY] = useState({
    rowY: 0,
    circleHeight: 0,
    gap: 0,
  });

  const rowRef = useRef<HTMLDivElement>(null);

  const rowData = gameBoard.value[row];

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const element = e.target as HTMLElement;
      const parentLeft: number =
        element.parentElement?.getBoundingClientRect().left || 0;

      const leftTranslate = element.getBoundingClientRect().left;
      const elementWidth = element.getBoundingClientRect().width / 2;

      // Left relative position of the hovered row
      onRowHover(row, leftTranslate - parentLeft + elementWidth);
    },
    [onRowHover, row],
  );

  const handleMouseClick = useCallback(() => {
    addChip(row);
  }, [row]);

  useLayoutEffect(() => {
    if (rowRef.current) {
      const boundingBox = rowRef.current.getBoundingClientRect();

      // gap between circles is 3.53% of the height of the row
      const gap = boundingBox.height * 0.0353;
      const circleHeight = (boundingBox.height - gap * 5) / 6;
      const rowY = boundingBox.height + boundingBox.top;

      setStartY({ rowY, circleHeight, gap });
    }
  }, []);

  return (
    <div
      className="row-span-6 grid aspect-[1/6] grid-cols-subgrid grid-rows-subgrid"
      data-row={row}
      onMouseEnter={handleMouseEnter}
      onClick={handleMouseClick}
      ref={rowRef}
    >
      {rowData.map((cell, i) => {
        if (cell === 0) {
          return null;
        }

        return (
          <Circle
            transitionProps={startY}
            column={i as 0 | 1 | 2 | 3 | 4 | 5}
            color={cell}
            key={i}
            isWinner={winnerCells.value.some(
              (cell) => cell[0] === row && cell[1] === i,
            )}
          />
        );
      })}
    </div>
  );
};

export default GameBoardRow;
