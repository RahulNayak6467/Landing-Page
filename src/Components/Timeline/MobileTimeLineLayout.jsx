// import MobileTimeline from "./MobileTimeline";
// import timeline from "../data/timeline";
import timeline from "../../data/timeline";
import MobileTimeline from "./MobileTimeline";
import { easeIn, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function MobileTimeLineLayout() {
  const mobiletimelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mobiletimelineRef,
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      ref={mobiletimelineRef}
      className="grid grid-cols-1 gap-y-6 h-full min-[700px]:hidden relative"
    >
      <motion.span
        style={{ height: height }}
        className="ml-5 mt-6 border-fuchsia-500  border-l-2  absolute "
      />
      {timeline.map((timeline) => (
        <MobileTimeline
          key={timeline.id}
          id={timeline.id}
          title={timeline.title}
          date={timeline.date}
          description={timeline.description}
          venue={timeline.venue}
          outcomes={timeline.outcomes}
          time={timeline.time}
          link={timeline.link}
        />
      ))}
    </motion.div>
  );
}

export default MobileTimeLineLayout;
