import { Pin, Clock } from "lucide-react";
function MobileTimeline({ title, description, venue, time, outcomes, date }) {
  return (
    <div className="ml-15 w-[70%] mt-6 border  rounded-2xl border-fuchsia-500 shadow-[0_0_15px_rgba(168,85,247,0.20)] hover:shadow-[0_0_15px_rgba(168,85,247,0.40)]">
      <div className="p-6">
        <p className="text-text-secondary text-xs">{date}</p>
        <h2 className="gradientText font-extrabold text-md mb-2">{title}</h2>
        <div className=" grid grid-cols-1 text-[15px] text-text-secondary gap-y-1 border-b border-b-fuchsia-900/20">
          <p className=" max-[500px]:text-[13px]">- {description}</p>
          <div className="flex items-center gap-2">
            <Pin className="mt-1" size={16} />
            <p className=" max-[500px]:text-xs">{venue}</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="mt-1" size={16} />
            <p className=" max-[500px]:text-xs">Timing: {time}</p>
          </div>
        </div>
        <div className="grid grid-cols-2  max-[700px]:grid-cols-1 gap-y-2 mt-2 text-sm   text-white ">
          {outcomes.map((el) => (
            <p className="gradientText text-xs" key={crypto.randomUUID()}>
              {el}
            </p>
          ))}
        </div>
        <a href="#about" className=" text-text-secondary text-xs ">
          Learn more -&gt;
        </a>
      </div>
    </div>
  );
}

export default MobileTimeline;
