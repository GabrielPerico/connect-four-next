import { memo } from "react";
import GameBoardRow from "./GameBoardRow";

interface GameBoardContainerProps {
  onRowHover: (row: number, leftTranslate: number) => void;
}

const GameBoardContainer: React.FC<GameBoardContainerProps> = memo(
  ({ onRowHover }) => {
    return (
      <div className="peer relative z-[2] grid aspect-[598/510] grid-cols-7 grid-rows-6 gap-x-[3.01%] gap-y-[3.53%]">
        {Array.from({ length: 7 }).map((_, i) => (
          <GameBoardRow
            row={i}
            key={i}
            onRowHover={onRowHover}
          />
        ))}
      </div>
    );
  },
);

GameBoardContainer.displayName = "GameBoardContainer";

export default GameBoardContainer;
