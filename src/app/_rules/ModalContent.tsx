import { FC } from "react";
import Button from "../_components/Button";

interface ModalContentProps {
  handleClose: () => void;
}

const ModalContent: FC<ModalContentProps> = ({ handleClose }) => {
  return (
    <>
      <div className="default-shadow relative flex flex-col gap-8 rounded-3xl bg-white px-8 pb-14 pt-7">
        <h3 className="self-center heading-l">RULES</h3>

        <span className="flex flex-col gap-4">
          <h4 className="text-purple-400 heading-s">OBJECTIVE</h4>

          <p className="text-base text-black text-opacity-65">
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
        </span>
        <span className="flex flex-col gap-4">
          <h4 className="text-purple-400 heading-s">HOW TO PLAY</h4>

          <ol className="flex flex-col gap-2 text-base text-black text-opacity-65">
            <li className="flex gap-4">
              <span className="text-black text-opacity-100 heading-xs">1</span>
              Red goes first in the first game.
            </li>
            <li className="flex gap-4">
              <span className="text-black text-opacity-100 heading-xs">2</span>
              Players must alternate turns, and only one disc can be dropped in
              each turn.
            </li>
            <li className="flex gap-4">
              <span className="text-black text-opacity-100 heading-xs">3</span>
              The game ends when there is a 4-in-a-row or a stalemate.
            </li>
            <li className="flex gap-4">
              <span className="text-black text-opacity-100 heading-xs">4</span>
              The starter of the previous game goes second on the next game.
            </li>
          </ol>
        </span>
      </div>
      <Button
        color="red"
        className="absolute bottom-0 left-1/2 w-auto -translate-x-1/2 translate-y-1/2 rounded-full"
        onClick={handleClose}
      >
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.5819L10.264 24.846L30.11 5"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </Button>
    </>
  );
};

export default ModalContent;
