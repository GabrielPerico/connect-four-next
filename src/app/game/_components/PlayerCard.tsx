import { Player } from "@/types/enum";
import PlayerIcon from "./PlayerIcon";
import { twMerge } from "tailwind-merge";
import { player1Score, player2Score } from "@/store/scoreboard";

interface PlayerCardProps {
  player: Player;
  className?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, className }) => {
  const playerScore = player === Player.One ? player1Score : player2Score;

  return (
    <div
      className={twMerge(
        "default-shadow isolate flex flex-col items-center justify-center gap-3 self-center rounded-2xl bg-white px-6 pb-4",
        className,
      )}
    >
      <PlayerIcon
        player={player}
        className="-mt-[50%]"
      />

      <div className="flex flex-col items-center justify-center text-nowrap">
        <p className="text-xl font-bold uppercase">Player {player}</p>

        <p className="text-6xl font-bold uppercase">{playerScore}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
