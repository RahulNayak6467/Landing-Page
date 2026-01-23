function Card({ heading, words, component }) {
  return (
    <div className="hover:scale-105 transition-all flex-1 hover:ring-4 cursor-pointer  rounded-xl hover:shadow-lg hover:shadow-fuchsia-500/50 hover:ring-fuchsia-500/40">
      <div className="rounded-xl border border-white/10 bg-white/5 h-full p-6">
        {component}
        <h3 className="text-xl md:text-2xl mt-2 font-semibold">{heading}</h3>
        <p className="mt-3 text-gray-300 text-sm md:text-xl">{words}</p>
      </div>
    </div>
  );
}

export default Card;
