import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Scrolls to top on every route change */}
      <div className="mx-auto">
        <Navbar />

        <div className="base-container w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* <div className="my-10">
          <Footer />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
