import { games } from "../arr/arr1";
function Projects() {
  const gamesArr = [...games, ...games];
  return (
    <section className="bg-black py-24 overflow-hidden">
      <h2 className="gradientText text-3xl font-bold md:text-5xl mb-10 flex justify-center ">
        What We Have Shipped
      </h2>
      <div>
        <ul className="flex gap-10 w-max scroll marquee-track">
          {gamesArr.map((game) => (
            <GamesList id={game.name} game={game} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function GamesList({ game }) {
  console.log(game);
  return (
    <li className="border-2 bg-bg-primary flex-col w-100 shrink-0 p-2 rounded-xl cursor-pointer  border-fuchsia-500/20  hover:shadow-fuchsia-700/50 hover:scale-95 transition-all hover:border-5 hover:shadow-[0px_0px_90px_rgba(0,0,0,0.25)]">
      <img
        className="h-50 w-full rounded-xl mb-8 object-cover brightness-60 hover:brightness-100"
        src={game.image}
        alt=""
      />
      <h2 className="text-white text-xl md:text-2xl mb-4">{game.name}</h2>
      <p className="text-text-secondary text-sm mb-4 md:text-xl line-clamp-3">
        {game.text}
      </p>
    </li>
  );
}

export default Projects;
