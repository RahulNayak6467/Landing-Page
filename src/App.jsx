import { useState } from "react";
import AboutUs from "./Components/AboutUs";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Teams from "./Components/Teams";
import Events from "./Components/Events ";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import MobileMenuPanel from "./Components/MobileMenuPanel";
import useCursor from "./CustomHooks/UseCursor";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  useCursor();
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-black  overflow-x-hidden  min-h-screen w-full ">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <main>
        <AboutUs />
        <Projects />
        <Teams />
        <Events />
        <CTA />
        <Footer />
      </main>
      <MobileMenuPanel open={isOpen} onClose={onClose} />
    </div>
  );
}

export default App;
