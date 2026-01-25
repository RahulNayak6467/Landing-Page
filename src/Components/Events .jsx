import { Calendar } from "lucide-react";
import events from "../arr/arr3";
import EventCard from "./EventCard";
import { motion } from "motion/react";
const outerContainerReveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
function Events() {
  return (
    <motion.section
      variants={outerContainerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-black py-12"
      id="events"
    >
      <h2 className="gradientText text-center text-3xl md:text-5xl mb-4">
        OUR EVENTS AND WORKSHOPS
      </h2>
      <p className="text-text-secondary  text-xl md:3xl text-center mb-12">
        Workshops, game jams, meetups, and sessions
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 sm:px-25 lg:px-40  mx-auto gap-x-6 gap-y-8">
        {events.map((events) => (
          <EventCard
            title={events.title}
            description={events.description}
            date={events.date}
            image={events.image}
            mode={events.Mode}
            venue={events.venue}
            link={events.link}
            key={events.id}
            id={events.id}
          />
          //   <FlippedCard image={events.image} />
        ))}
      </div>
    </motion.section>
  );
}

export default Events;
