"use client";

import Button from "@/app/_components/Button";
import { resetGame, startTimer, stopTimer } from "@/store/game";
import { resetScore } from "@/store/scoreboard";
import { menuOpen } from "@/store/state";
import {
  useCallback,
  useEffect,
  useRef,
} from "@preact-signals/safe-react/react";
import { useRouter } from "next/navigation";

interface PauseMenuProps {
  open: boolean;
}

menuOpen.subscribe((open) => {
  if (open) {
    stopTimer();
  } else {
    startTimer();
  }
});

const PauseMenu: React.FC<PauseMenuProps> = ({ open }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const router = useRouter();

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [open]);

  const handleClose = useCallback(() => {
    menuOpen.value = false;
  }, []);

  const handleResetGame = useCallback(() => {
    resetScore();
    resetGame();
    handleClose();
  }, [handleClose]);

  const handleQuitGame = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <dialog
      ref={dialogRef}
      className="default-shadow min-w-[30rem] flex-col items-center justify-center gap-11 rounded-2xl bg-purple-400 px-10 py-12 open:flex open:backdrop:bg-black open:backdrop:opacity-50"
    >
      <h5 className="uppercase text-white heading-l">Pause</h5>

      <div className="flex w-full flex-col gap-8">
        <Button
          onClick={handleClose}
          className="justify-center"
          color="white"
        >
          Continue Game
        </Button>
        <Button
          onClick={handleResetGame}
          className="justify-center"
          color="white"
        >
          Restart
        </Button>
        <Button
          onClick={handleQuitGame}
          className="justify-center"
        >
          Quit Game
        </Button>
      </div>
    </dialog>
  );
};

export default PauseMenu;
