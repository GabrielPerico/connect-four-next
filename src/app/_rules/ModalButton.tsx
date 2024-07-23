"use client";

import { useCallback, useRef } from "react";
import Button from "../_components/Button";
import ModalContent from "./ModalContent";
import { twMerge } from "tailwind-merge";

const ModalButton: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <>
      <Button
        color="white"
        name="game-rules"
        onClick={openDialog}
      >
        Game Rules
      </Button>

      <dialog
        ref={dialogRef}
        className={twMerge(
          "max-w-lg overflow-visible rounded-3xl backdrop:bg-purple-400",
          "open:backdrop:starting:opacity-0 backdrop:allow-discrete backdrop:opacity-0 backdrop:transition-all backdrop:duration-200 open:backdrop:opacity-100",
          "open:starting:opacity-0 allow-discrete opacity-0 transition-all duration-200 open:opacity-100",
        )}
      >
        <ModalContent handleClose={closeDialog} />
      </dialog>
    </>
  );
};

export default ModalButton;
