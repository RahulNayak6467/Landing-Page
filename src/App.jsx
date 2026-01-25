import { useEffect, useRef, useState } from "react";
import AboutUs from "./Components/AboutUs";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import Projects from "./Components/Projects";
import Teams from "./Components/Teams";
import Events from "./Components/Events ";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import MobileMenuPanel from "./Components/MobileMenuPanel";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const x = useRef(null);
  const y = useRef(null);
  useEffect(() => {
    const body = document.querySelector("body");
    const controller = document.querySelector(".controller");
    body.addEventListener("mousemove", function (e) {
      x.current = e.clientX;
      y.current = e.clientY;
      controller.style.left = `${x.current - 20}px`;
      controller.style.top = `${y.current}px`;
    });
  }, []);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-black overflow-x-hidden   min-h-screen w-full ">
      <BrowserRouter>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero />
        <AboutUs />
        <Projects />
        <Teams />
        <Events />
        <CTA />
        <Footer />
        <MobileMenuPanel open={isOpen} onClose={onClose} />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
