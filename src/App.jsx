import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <div className="bg-bg-primary min-h-screen ">
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
      <Hero />
    </div>
  );
}

export default App;
