import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Job from "./pages/JobDescription";

function App() {
  const [darkMode, setDarkMode] = useState(false);




  const onDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-[#F4F6F8] dark:bg-[#121721]">
        <Header darkMode={darkMode} onClick={onDarkMode} />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/job" element={<Home />}></Route>
            <Route path="/job/:id" element={<Job />}></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
