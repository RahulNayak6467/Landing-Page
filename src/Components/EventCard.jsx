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
      className="w-full max-[640px]:w-[80%] max-[640px]:mx-auto h-full cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full border-2 cursor-pointer border-fuchsia-500/20 hover:border-fuchsia-900 rounded-2xl transition-all duration-700 will-change-transform hover:shadow-[0_0_45px_rgba(168,85,247,0.40)]"
        style={{
          transformStyle: "preserve-3d",
          transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "270px",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full p-6 bg-black rounded-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center gap-1">
            <Calendar size={24} className="text-white" />
            <p className="text-text-secondary md:text-md text-xs">{date}</p>
          </div>

          <h2 className="text-text-secondary brightness-140 font-extrabold text-md xl:text-2xl mt-2">
            {title}
          </h2>

          <p className="text-text-secondary brightness-90 text-sm mt-2">
            {description}
          </p>

          <div className="flex items-center text-xs md:text-sm gap-4 mt-4">
            <span className="text-text-secondary brightness-125">{mode}</span>
            <span className="text-text-secondary brightness-125">{venue}</span>
          </div>

          <div className="flex gap-4 text-text-secondary mt-3">
            <button className="cursor-pointer text-white text-sm lg:text-md px-4 py-1 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500">
              Register
            </button>
            <a
              aria-label={`Learn more about ${title}`}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-sm lg:text-md px-4 py-1 bg-zinc-900/60 text-zinc-200 brightness-50 border border-zinc-700/60 rounded-2xl"
            >
              More on {title}
            </a>
          </div>

          <p
            onClick={() => setIsClicked(!isClicked)}
            className="w-fit border-b-fuchsia-500/40 border-b brightness-60 cursor-pointer gradientText mt-2"
          >
            Tap to view the poster →
          </p>
        </div>

        <div
          onClick={() => setIsClicked(!isClicked)}
          className="absolute inset-0 w-full h-full p-4 rounded-2xl bg-black flex items-center justify-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            loading="lazy"
            src={image}
            className="w-full h-auto max-h-full object-contain rounded-2xl"
            alt={title}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default EventCard;
