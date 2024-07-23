import { Player } from "@/types/enum";
import { twMerge } from "tailwind-merge";

interface PlayerIconProps {
  player: Player;
  className?: string;
}

const playerClasses = {
  [Player.One]: "text-red-400  scale-y-100 scale-x-100",
  [Player.Two]: "text-yellow-400 scale-y-100 -scale-x-100",
};

const PlayerIcon: React.FC<PlayerIconProps> = ({ player, className }) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge([
        playerClasses[player],
        "overflow-visible",
        className,
      ])}
    >
      <circle
        id="Oval Copy 11"
        cx="28"
        cy="28"
        r="26"
        fill="currentColor"
        stroke="black"
        strokeWidth="4px"
        className="no-outline-shadow"
      ></circle>
      <path
        id="Oval Copy 11_2"
        d="M46.25 26C46.25 33.4558 40.2058 39.5 32.75 39.5C25.2942 39.5 19.25 33.4558 19.25 26H22.25C22.25 31.799 26.951 36.5 32.75 36.5C38.549 36.5 43.25 31.799 43.25 26H46.25Z"
        fill="black"
      ></path>
      <path
        id="Path"
        d="M31.75 18V23.9844H28.75V18H31.75Z"
        fill="black"
      ></path>
      <path
        id="Path Copy"
        d="M41.75 18V23.9844H38.75V18H41.75Z"
        fill="black"
      ></path>
    </svg>
  );
};

export default PlayerIcon;
