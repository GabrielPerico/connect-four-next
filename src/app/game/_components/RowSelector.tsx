"use client";

import { currentPlayer } from "@/store/game";
import { Player } from "@/types/enum";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface RowSelectorProps {
  className?: string;
}

const fixedClasses = {
  [Player.One]: "fill-red-400",
  [Player.Two]: "fill-yellow-400",
};

const RowSelector = forwardRef<SVGSVGElement, RowSelectorProps>(
  ({ className }, ref) => {
    const playerClass = fixedClasses[currentPlayer.value];

    return (
      <svg
        width="40"
        height="33"
        viewBox="0 0 40 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge(
          "delay-[0.2s,0s, 0s] translate-x-[calc(-50% + 0px)] no-outline-shadow absolute top-0 translate-y-[-170%] transition-[opacity,left,transform] peer-hover:delay-[0s,0s,0s]",
          className,
          playerClass,
        )}
        ref={ref}
      >
        <path
          d="M15.7456 29.3833L4.81372 21.2262C3.04302 19.9049 2 17.8253 2 15.6159V9C2 5.13401 5.13401 2 9 2H31C34.866 2 38 5.13401 38 9V15.6002C38 17.8219 36.9454 19.9117 35.1581 21.2314L24.0899 29.4043C21.6078 31.2371 18.2184 31.2286 15.7456 29.3833Z"
          stroke="black"
          strokeWidth="4"
          className="transition"
        ></path>
      </svg>
    );
  },
);

RowSelector.displayName = "RowSelector";

export default RowSelector;
