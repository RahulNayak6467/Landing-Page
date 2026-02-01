import { useState } from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import useCursor from "./CustomHooks/UseCursor";
import Navbar from "./Components/Navbar/Navbar";
import MobileMenuPanel from "./Components/Navbar/MobileMenuPanel";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import Projects from "./Components/Projects";
import Teams from "./Components/Teams/Teams";
import Events from "./Components/Event/Events";
import Timeline from "./Components/Timeline/Timeline";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  useCursor();
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-black  overflow-x-hidden  min-h-screen w-full ">
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothtouch: false,
          touchMultiplier: 2,
        }}
      >
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero />
        <main>
          <AboutUs />
          <Projects />
          <Teams />
          <Events />
          <Timeline />
          <CTA />
          <Footer />
        </main>
        <MobileMenuPanel open={isOpen} onClose={onClose} />
      </ReactLenis>
    </div>
  );
}

export default App;
