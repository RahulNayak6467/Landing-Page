import { motion } from "motion/react";
import Card from "./Card";
import { Book, Brain, Glasses } from "lucide-react";
const revealFadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};
function AboutUs() {
  return (
    <div>
      <section className="bg-black text-white" id="about">
        <motion.div
          variants={revealFadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <h2 className=" font-bold text-2xl  text-center md:text-4xl  xl:text-5xl mb-4 gradientText ">
            THIS IS WHERE IT STARTED
          </h2>

          <p className="mt-4 text-sm  text-gray-400 max-w-7xl md:text-lg text-left  tracking-wider mx-auto ">
            Game to Aim is the official Game Development Club of NIT Rourkela,
            started in 2020. We are a group of developers, artists, and
            storytellers who work together to create games across multiple
            platforms, ranging from mobile releases to Virtual Reality
            experiences, using engines like Unity, Unreal, and other modern
            tools.
          </p>

          <motion.div
            variants={revealFadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card */}
            <Card
              heading={"Virtual & Augmented Reality"}
              words={
                "Creating Immersive experiences that bridges the line between digital and physical worlds"
              }
              component={<Glasses />}
            />
            <Card
              heading={"Multiplayer & Networking ideas "}
              words={
                "Making a world where player can connect, compete and improve their skills alongside friends"
              }
              component={<Brain />}
            />
            <Card
              heading={"Community & Collaboration"}
              words={
                "Developing an army of developers, artists and storytellers who come together to show their creativity"
              }
              component={<Book />}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutUs;
