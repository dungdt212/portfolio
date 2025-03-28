import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import LineGradient from "./components/LineGradient";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      
      <div className="w-5/6 mx-auto">
        {isAboveMedium && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}        
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
          >
            <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <Skills />
          </motion.div>
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("projects")}
          >
            <Projects />
          </motion.div>       
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
