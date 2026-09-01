import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Certificates from "./components/Certificates";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <HireMe />
      <Footer />
      {/* <Contact /> */}
    </>
  )
}

export default App
