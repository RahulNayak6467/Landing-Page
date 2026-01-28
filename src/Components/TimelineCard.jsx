import { motion, scale } from "motion/react";
import { Circle, Clock, Minus, Pin } from "lucide-react";
import { delay } from "motion";
const revealAnimation = {
  hidden: {
    scale: 0,
    y: 20,
  },
  visible: {
    scale: 1,
    y: 0,
  },
};
function TimelineCard({
  id,
  date,
  title,
  description,
  venue,
  time,
  outcomes,
  direction,
}) {
  const styling =
    "p-6 max-[1000px]:w-[70%]  lg:w-100 border border-fuchsia-900/50   hover:scale-105 transition-all rounded-2xl hover:shadow-[0_0_35px_rgba(168,85,247,0.40)] shadow-[0_0_35px_rgba(168,85,247,0.15)]  animate-float text-text-secondary  absolute hover:translate-y-1";
  return (
    <motion.div
      variants={revealAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={
        direction === "right"
          ? styling + " right-10 ml-4"
          : styling + " left-10 mr-4"
      }
      style={{
        top: `${16 * (id - 1)}%`,
        borderTopLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderTopRightRadius: "30px",
        borderBottomLeftRadius: "30px",
      }}
    >
      <h2 className="gradientText font-extrabold lg:text-xl md:text-md  max-[500px]:text-sm mb-2">
        {title}
      </h2>
      <div className=" ml-1 grid grid-cols-1 text-[15px] text-text-secondary gap-y-1 border-b border-b-fuchsia-900/20">
        <p className=" max-[500px]:text-xs">- {description}</p>
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
          <p className="gradientText" key={crypto.randomUUID()}>
            {el}
          </p>
        ))}
        {/* <p className="gradientText text">Showcase</p>
        <p className="gradientText text">Beginner Friendly</p>
        <p className="gradientText text">Free of Cost</p>
        <p className="gradientText text">Entry Prizes</p> */}
      </div>
      <a href="#about" className=" text-text-secondary text-xs ">
        Learn more -&gt;
      </a>
    </motion.div>
  );
}

export default TimelineCard;
