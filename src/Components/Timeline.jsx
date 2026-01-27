import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import TimelineCard from "./TimelineCard";
import timeline from "../data/timeline";
import { Minus } from "lucide-react";
import { section } from "motion/react-client";
const oddTimeline = timeline.filter((timeline) => timeline.id % 2 === 0);
const evenTimeline = timeline.filter((timeline) => timeline.id % 2 !== 0);

const timeLineReveal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 100,
  },
};

function Timeline() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "145%"]);
  return (
    <section className="bg-black py-12">
      <h2 className="gradientText text-center text-3xl md:text-5xl mx-auto">
        OUR 2025 Timeline
      </h2>
      <motion.div
        variants={timeLineReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="flex py-12 "
      >
        <div className="h-350 w-[50%] relative gradientText">
          <motion.span
            onClick={() => console.log(scrollYProgress)}
            ref={timelineRef}
            className="absolute right-0 top-0 border-r-2 border-r-fuchsia-500 w-[2px] h-full"
            style={{
              height,
            }}
          />
          {/* <TimelineCard
          id={1}
          title={"Hello"}
          date={"Hello"}
          description={"Hello"}
          venue={"Hello"}
          outcomes={["Hello"]}
          time={"Hello"}
          direction={"right"}
          /> */}

          {oddTimeline.map((timeline) => (
            <TimelineCard
              key={timeline.id}
              id={timeline.id}
              title={timeline.title}
              date={timeline.date}
              description={timeline.description}
              venue={timeline.venue}
              outcomes={timeline.outcomes}
              time={timeline.time}
              direction={"right"}
            />
          ))}
        </div>

        <div className="gradientText relative">
          {evenTimeline.map((timeline) => (
            <TimelineCard
              key={timeline.id}
              id={timeline.id}
              title={timeline.title}
              date={timeline.date}
              description={timeline.description}
              venue={timeline.venue}
              outcomes={timeline.outcomes}
              time={timeline.time}
              direction={"left"}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Timeline;
