import { useState } from "react";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";

const leftRevealAnimation = {
  hidden: {
    filter: "blur(15px)",
    opacity: 0,
    x: -100,
  },
  visible: {
    filter: "none",
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const rightRevealAnimation = {
  hidden: {
    filter: "blur(15px)",
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "none",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

function EventCard({ image, date, title, description, mode, venue, link, id }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <motion.div
      variants={id % 2 === 0 ? rightRevealAnimation : leftRevealAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full max-[640px]:w-[80%] max-[640px]:mx-auto  h-full perspective-distant bg-transparent cursor-pointer group"
    >
      <div
        className={
          isClicked
            ? "relative group-hover:rotate-y-180 duration-1000  transform-3d  border-2 cursor-pointer border-fuchsia-500/20 hover:scale-105 hover:border-fuchsia-900  rounded-2xl transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(168,85,247,0.40)]"
            : "relative  transform-3d  border-2 h-70 cursor-pointer border-fuchsia-500/20 hover:scale-105 hover:border-fuchsia-900  rounded-2xl transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(168,85,247,0.40)]"
        }
      >
        <div className="absolute backface-hidden h-full w-full p-6">
          <div className="flex items-center gap-1">
            {" "}
            <Calendar size={24} className="text-white" />{" "}
            <p className="text-text-secondary md:text-md text-xs">
              {date}
            </p>{" "}
          </div>{" "}
          <h2 className="text-text-secondary brightness-140 font-extrabold text-md xl:text-2xl mt-2">
            {" "}
            {title}{" "}
          </h2>{" "}
          <p className="text-text-secondary brightness-90  text-sm mt-2">
            {" "}
            {description}{" "}
          </p>{" "}
          <div className="flex items-center text-xs md:text-sm gap-4 mt-4">
            {" "}
            <span className="text-text-secondary brightness-125">
              {mode}
            </span>{" "}
            <span className="text-text-secondary  brightness-125">
              {venue}
            </span>{" "}
          </div>{" "}
          <div className="flex gap-4 text-text-secondary mt-3">
            {" "}
            <button className="cursor-pointer text-white text-sm lg:text-md px-4 md:py-1  rounded-2xl bg-linear-to-r from-pink-500 to-violet-500">
              {" "}
              Register{" "}
            </button>{" "}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer px-4 py-1 bg-zinc-900/60 text-zinc-200 brightness-50 border-zinc-700/60 rounded-2xl"
            >
              {" "}
              LearnMore{" "}
            </a>{" "}
          </div>{" "}
          <p
            onClick={() => setIsClicked(!isClicked)}
            className="w-fit border-b-fuchsia-500/40 border-b brightness-60 cursor-pointer gradientText mt-2"
          >
            {" "}
            Tap to view the poster -&gt;{" "}
          </p>{" "}
        </div>{" "}
        <div
          onClick={() => setIsClicked(!isClicked)}
          className="absolute rotate-y-180 backface-hidden p-4 w-full h-full  rounded-2xl"
        >
          <img src={image} className="h-62 w-full rounded-2xl" alt="" />
        </div>
      </div>
    </motion.div>
  );
}
export default EventCard;
