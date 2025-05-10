// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <div className="mx-auto">
            <Navbar />

            <div className="base-container w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </div>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
