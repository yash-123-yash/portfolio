import { useState } from 'react'

// import { AiFillApple } from "react-icons/ai";
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skill from './components/Skill';
function App() {


  return (
    <>
    {/* <AiFillApple/> */}
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    {/* <SocialLinks/> */}
    </>
  )
}

export default App
