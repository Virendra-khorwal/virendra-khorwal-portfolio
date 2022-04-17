import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ParticleBackground from './components/PartctilceBackground'

function App() {
  return (
    <div className="App scroll-smooth w-full overflow-hidden">

      <Navbar />
      <ParticleBackground />
      <Hero/>
      <About />
      <Skill />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
