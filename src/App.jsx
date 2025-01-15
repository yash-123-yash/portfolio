import { useState } from 'react'

// import { AiFillApple } from "react-icons/ai";
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
function App() {


  return (
    <>
    {/* <AiFillApple/> */}
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    {/* <SocialLinks/> */}
    </>
  )
}

export default App
