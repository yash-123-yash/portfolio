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

  const [theme,setTheme]=useState('dark')

  function changetheme(theme){
    if(theme==='dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
    console.log(theme)
  }
  

  return (
    <>
    {/* <AiFillApple/> */}
    <Navbar changetheme={changetheme} theme={theme}/>
    <Home theme={theme}/>
    <About theme={theme}/>
    <Skill theme={theme}/>
    <Projects theme={theme}/>
    <Contact theme={theme}/>
    {/* <SocialLinks/> */}
    </>
  )
}

export default App
