import { Calendar } from "lucide-react";
import events from "../arr/arr3";
import EventCard from "./EventCard";
function Events() {
  return (
    <section className="bg-black py-12" id="events">
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
          />
          //   <FlippedCard image={events.image} />
        ))}
      </div>
    </section>
  );
}

export default Events;
