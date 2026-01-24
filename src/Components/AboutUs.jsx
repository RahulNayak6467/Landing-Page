import Card from "./Card";
import { Book, Brain, Glasses } from "lucide-react";
function AboutUs() {
  return (
    <div>
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="md:text-4xl font-bold text-center text-5xl mb-4 gradientText ">
            THIS IS WHERE IT STARTED
          </h2>

          <p className="mt-4 text-center text-gray-400 max-w-7xl text-2xl tracking-wider mx-auto ">
            Game to Aim is the official Game Development Club of NIT Rourkela,
            started in 2020. We are a group of developers, artists, and
            storytellers who work together to create games across multiple
            platforms, ranging from mobile releases to Virtual Reality
            experiences, using engines like Unity, Unreal, and other modern
            tools.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card */}
            <Card
              heading={"Virtual & Augmented Reality"}
              words={
                "Crafting Immersive expereince that blur the line between digital and physical worlds"
              }
              component={<Glasses />}
            />
            <Card
              heading={"Multiplayer & Network Experiences"}
              words={
                "Build connected words where player can collaborate, compete, and create shared memories"
              }
              component={<Brain />}
            />
            <Card
              heading={"Community & Collaboration"}
              words={
                "Foster a space where developers , artists and story tellers come together to learn, build and grow"
              }
              component={<Book />}
            />
            {/* repeat for other cards */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
