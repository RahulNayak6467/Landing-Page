import { useEffect, useRef } from "react";
import AboutUs from "./Components/AboutUs";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import Projects from "./Components/Projects";
function App() {
  const x = useRef(null);
  const y = useRef(null);
  useEffect(() => {
    const body = document.querySelector("body");
    const controller = document.querySelector(".controller");
    body.addEventListener("mousemove", function (e) {
      x.current = e.clientX;
      y.current = e.clientY;
      controller.style.left = `${x.current}px`;
      controller.style.top = `${y.current}px`;
    });
  }, []);
  return (
    <div className="bg-bg-primary min-h-screen ">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <AboutUs />
        <Projects />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
