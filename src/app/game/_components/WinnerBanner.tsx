"use client";

import { winner } from "@/store/game";
import { Player } from "@/types/enum";
import { twMerge } from "tailwind-merge";

const bannerClasses = {
  "-1": "bg-gray-400",
  null: "bg-purple-300",
  [Player.One]: "bg-red-400",
  [Player.Two]: "bg-yellow-400",
};

const WinnerBanner: React.FC = () => {
  const className = bannerClasses[winner.value ?? "null"];

  return (
    <div
      className={twMerge(
        "absolute top-0 -z-10 h-dvh w-dvw rounded-t-[4.25rem] bg-purple-300 transition",
        className,
      )}
    />
  );
};

export default WinnerBanner;
