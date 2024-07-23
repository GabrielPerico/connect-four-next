import { Player } from "@/types/enum";
import PlayerCard from "./_components/PlayerCard";
import GameHeader from "./_components/GameHeader";
import GameBoard from "./_components/GameBoard";
import Timer from "./_components/Timer";
import WinnerBanner from "./_components/WinnerBanner";

const Game: React.FC = () => {
  return (
    <div className="isolate flex min-h-svh min-w-full items-center justify-center bg-purple-400 text-black">
      <div className="grid h-svh w-full grid-cols-[1fr_calc(2%+4rem)_auto_calc(2%+4rem)_1fr] grid-rows-[auto_calc(2%+3rem)_1fr_1rem_auto] py-10">
        <GameHeader className="col-start-3 row-start-1" />

        <PlayerCard
          player={Player.One}
          className="col-start-1 row-start-3 justify-self-end"
        />
        <PlayerCard
          player={Player.Two}
          className="col-start-5 row-start-3 justify-self-start"
        />

        <GameBoard className="col-start-3 row-start-3" />

        <Timer className="col-start-3 row-start-5" />
      </div>
    </div>
  );
};

export default Game;
