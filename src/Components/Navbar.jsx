import { motion } from "motion/react";
import MobileMenuPanel from "./MobileMenuPanel";
import {
  CalendarFold,
  CircleAlert,
  Home,
  Joystick,
  Send,
  User,
  Menu,
} from "lucide-react";
import { useRef } from "react";
const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

function Navbar({ setIsOpen }) {
  const myRef = useRef("about");
  function handleSmoothScroll(element) {
    if (!myRef.current) return;
    myRef.current = document.getElementById(`${element}`);
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-black sticky top-0 border-2 z-50 "
      >
        <nav className="flex justify-between items-center  px-4 pb-6 pt-10 backdrop-blur-2xl border-b w-[80%] md:w-[95%] mx-auto">
          {/* LEFT: Logo */}
          <div className="flex gap-3 items-center shrink-0">
            <img
              src="https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968575/GTALogoPink_2x_-_Game_To_Aim_lc3ttf.png"
              className="h-12 shrink-0 cursor-pointer"
              alt="GTA Logo"
            />
            <h1 className="text-md md:text-lg xl:text-xl font-extrabold text-text-primary hidden min-[1000px]:inline cursor-pointer whitespace-nowrap ml-3 leading-tight">
              GAME TO AIM
            </h1>
          </div>

          {/* CENTER: Desktop/Tablet Links */}
          <div className=" hidden min-[700px]:flex shadow-[0_0_15px_rgba(240,242,242,0.2)] gap-4 md:gap-6 mr-6 ml-6 border border-zinc-100/20 px-4 py-2 rounded-2xl text-text-secondary items-center">
            <div className="flex items-center gap-2">
              <CircleAlert size={16} className="text-white" />
              <a
                onClick={() => handleSmoothScroll("about")}
                className="smoothscroll text-sm md:text-md 2xl:text-xl  hover:text-[#FF006E] hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                About
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Joystick size={16} className="text-white" />
              <a
                onClick={() => handleSmoothScroll("projects")}
                className="smoothscroll text-sm md:text-md  2xl:text-xl    hover:text-[#FF006E] hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                Projects
              </a>
            </div>

            <div className="flex items-center gap-2">
              <User size={16} className="text-white" />
              <a
                onClick={() => handleSmoothScroll("teams")}
                className="smoothscroll text-sm md:text-md  2xl:text-xl   hover:text-[#FF006E] hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                Teams
              </a>
            </div>

            <div className="flex items-center gap-2">
              <CalendarFold size={16} className="text-white" />
              <a
                onClick={() => handleSmoothScroll("events")}
                className="smoothscroll text-sm md:text-md   2xl:text-xl  hover:text-[#FF006E] hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                Events
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Send size={16} className="text-white" />
              <a
                onClick={() => handleSmoothScroll("CTA")}
                className="smoothscroll text-sm md:text-md   2xl:text-xl  hover:text-[#FF006E] hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT: CTA + Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a className="hidden min-[700px]:inline lg:px-5 md:px-3 md:py-1 py-1 px-2 lg:py-2 rounded-md text-md border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition">
              Join Us
            </a>

            {/* Hamburger (below 780px) */}
            <button
              onClick={() => setIsOpen(true)}
              className="min-[700px]:hidden rounded-xl p-2 border border-zinc-100/10 bg-zinc-900/40 text-white/80 hover:bg-zinc-900/70 hover:border-fuchsia-500/30 transition"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Panel */}
    </>
  );
}

export default Navbar;
