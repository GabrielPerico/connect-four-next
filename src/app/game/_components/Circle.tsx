import { twMerge } from "tailwind-merge";
import { useTransition, animated } from "@react-spring/web";
import { useRef } from "react";

interface CircleProps {
  column: 0 | 1 | 2 | 3 | 4 | 5;
  color: 1 | 2;
  isWinner: boolean;

  transitionProps: {
    rowY: number;
    circleHeight: number;
    gap: number;
  };
}

const columnClasses = {
  5: "row-start-6",
  4: "row-start-5",
  3: "row-start-4",
  2: "row-start-3",
  1: "row-start-2",
  0: "row-start-1",
};

const colorsClasses = {
  1: "fill-red-400",
  2: "fill-yellow-400",
};

const Circle: React.FC<CircleProps> = ({
  column,
  color,
  isWinner,
  transitionProps,
}) => {
  const columnClass = columnClasses[column];
  const colorClass = colorsClasses[color];

  const startTransition =
    transitionProps.rowY -
    (5 - column + 1) * transitionProps.circleHeight -
    (5 - column) * transitionProps.gap;

  const transition = useTransition(color, {
    from: {
      transform: `translateY(-${startTransition}px)`,
    },
    enter: {
      transform: "translateY(0px)",
    },
    leave: {
      transform: `translateY(100vh)`,
    },

    config: {
      mass: 1.5,
      tension: 500,
      friction: 26,
      bounce: 1,
    },
  });

  return transition(
    (style, item) =>
      item && (
        <animated.svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge(columnClass, "pointer-events-none")}
          style={style}
        >
          <circle
            cx="36"
            cy="36"
            r="34"
            fill="#FFCE67"
            stroke="black"
            strokeWidth="3"
            className={colorClass}
          />
          {isWinner && (
            <circle
              cx="36"
              cy="36"
              r="14"
              stroke="white"
              strokeWidth="6"
            />
          )}
        </animated.svg>
      ),
  );
};

export default Circle;
