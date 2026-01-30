import { Crosshair, Users, Truck, Shield } from "lucide-react";
import { FlipWords } from "./Flipwords";
import { animate, delay, motion } from "motion/react";
import useMobile from "../CustomHooks/useMobile";

function Hero() {
  const [isMobile] = useMobile();
  const fadeLeftAnimation = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
  };
  const fadeRightAnimation = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
  };
  return (
    <motion.section className="py-6 bg-black">
      <Crosshair
        size={40}
        className="opacity-100 controller  text-purple-900 z-50"
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left */}
          <div className="flex-1">
            <motion.h1
              variants={fadeLeftAnimation}
              initial="initial"
              animate="animate"
              className="text-3xl  md:text-5xl lg:text-6xl font-bold gradientText leading-tight"
            >
              GAME TO AIM
            </motion.h1>
            {!isMobile ? (
              <FlipWords
                className="text-xs md:text-sm text-text-secondary brightness-75 -mt-2"
                words={[
                  "NIT ROURKELA GAME DEVELOPMENT CLUB",
                  "WE DONT CODE WE BUILD WORLDS",
                  "JOIN US FOR AN EXICITING JOURNEY",
                ]}
                duration={3000}
              />
            ) : (
              <p
                variants={fadeLeftAnimation}
                initial="hidden"
                animate="visible"
                className="text-xs md:text-sm text-text-secondary brightness-75 mt-2"
              >
                "NIT ROURKELA GAME DEVELOPMENT CLUB"
              </p>
            )}
            <br />
            <motion.div
              variants={fadeLeftAnimation}
              initial="initial"
              animate="animate"
              className="grid mt-8  sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 rounded-2xl animate-float  shadow-[0_0_45px_rgba(168,85,247,0.40)]  p-8 text-lg gap-4 border-2 border-fuchsia-500"
            >
              <div className="flex-col gap-4  p-1">
                <div className="flex justify-center mr-2">
                  <Truck size={20} className="text-white" />
                </div>
                <p className=" text-center gradientText text-3xl">10+</p>
                <p className="text-text-secondary text-sm xl:text-lg text-center">
                  Products Shipped
                </p>
              </div>
              <div className="flex-col gap-2 p-1">
                <div className="flex justify-center mr-2">
                  <Users size={20} className="text-white " />
                </div>
                <p className=" text-center gradientText text-3xl ">50+</p>
                <p className="text-text-secondary text-center text-sm xl:text-lg">
                  Members
                </p>
              </div>
              <div className="flex-col gap-2  p-1">
                <div className="flex justify-center mr-2">
                  <Shield size={20} className="text-white text-center" />
                </div>
                <p className=" text-center gradientText text-3xl ">5+</p>
                <p className="text-text-secondary text-center text-sm xl:text-lg">
                  Teams
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            variants={fadeRightAnimation}
            initial="initial"
            animate="animate"
            className="flex-1"
          >
            <div className="relative max-w-md mx-auto ">
              <div className="relative rounded-2xl animate-glow border-2 border-fuchsia-500 transition-all  ">
                <img
                  src="/images/Setup.webp"
                  alt="Gaming setup"
                  fetchPriority="high"
                  className="w-full h-auto  object-cover  md:h-140 rounded-xl imgsize"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
