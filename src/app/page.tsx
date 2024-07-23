import Button from "./_components/Button";
import Connect4Icon from "./_components/Connect4Icon";
import PlayerXPlayerIcon from "./_components/PlayerXPlayerIcon";
import ModalButton from "./_rules/ModalButton";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-svh items-center justify-center bg-purple-300">
      <main className="default-shadow flex flex-col items-center justify-center gap-20 rounded-2xl bg-purple-400 px-10 pb-14 pt-16">
        <Connect4Icon />

        <div className="flex flex-col gap-8">
          <a href="/game">
            <Button color="yellow">
              Player vs Player
              <PlayerXPlayerIcon />
            </Button>
          </a>

          <ModalButton />
        </div>
      </main>
    </div>
  );
};

export default Home;
