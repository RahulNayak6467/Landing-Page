import { games } from "../data/games";
import useReverse from "../CustomHooks/useReverse";
function Projects() {
  const [leftDirection, projectRef] = useReverse();
  const gamesArr1 = games.slice(0, 5);
  const gamesArr2 = games.slice(5, 10);
  const gamesArr = [...gamesArr1, ...gamesArr1];
  const gamesArr3 = [...gamesArr2, ...gamesArr2];
  return (
    <section className="bg-black py-24 overflow-x-hidden" id="projects">
      <h2
        ref={projectRef}
        className="gradientText text-2xl  mx-auto font-bold md:text-5xl mb-10 flex justify-center "
      >
        What We Have Shipped
      </h2>
      <div className="grid grid-cols-1 gap-y-10">
        <div>
          <ul
            className={
              leftDirection
                ? "flex gap-10 w-max scroll marquee-trackLeft"
                : "flex gap-10 w-max scroll marquee-trackRight"
            }
          >
            {gamesArr.map((game) => (
              <GamesList
                projectRef={projectRef}
                id={game.name}
                game={game}
                key={crypto.randomUUID()}
              />
            ))}
          </ul>
        </div>
        <div>
          <ul
            className={
              leftDirection
                ? "flex gap-10 w-max scroll marquee-trackRight"
                : "flex gap-10 w-max scroll marquee-trackLeft"
            }
          >
            {gamesArr3.map((game) => (
              <GamesList
                projectRef={projectRef}
                id={game.name}
                game={game}
                key={crypto.randomUUID()}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GamesList({ game }) {
  return (
    <li className="border-2 bg-black flex-col w-100 shrink-0 p-2 rounded-xl cursor-pointer h-70   border-fuchsia-700/20   transition-all  hover:border-2 hover:border-fuchsia-700/50 hover:shadow-[0_0_45px_rgba(168,85,247,0.40)]">
      <img
        className="h-40 w-full rounded-xl mb-2 object-cover "
        src={game.image}
        loading="lazy"
        alt={game.name}
      />
      <h2 className="text-text-secondary font-extrabold text-lg md:text-xl mb-2 ">
        {game.name}
      </h2>
      <p className="text-text-secondary text-sm mb-4 md:text-md line-clamp-3">
        {game.text}
      </p>
    </li>
  );
}

export default Projects;
