import React from 'react'
// import App from '../App'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import heroImage from '../assets/profile1.jpeg'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';
// import { scroller } from 'react-scroll';



function Home({theme}) {

  

  return (
    <div name="home" className={` h-screen w-full  md:px-6  md:pt-0   ${theme==='light'? 'bg-bg':'bg-gradient-to-b from-black to-gray-800 text-white'} pt-0 `}>
      <div className=" max-w-screen-lg lg:max mx-auto flex flex-col lg:flex-row items-center justify-center md:justify-around h-full px-4 ">
        <motion.div 
            variants={fadeIn('up',0.9)}
            initial={{display:'hidden',opacity:0}}
            whileInView={{
              display:'show',
              opacity:1,
              scale:1,
              transition:{duration:1.2}  
            }}
            viewport={{
            //  once:true ,
              opacity:0}}
            className="mt-24 md:mt-20 flex flex-col justify-center h-4/5  ">

            <h1 className='md:text-2xl'>I'm,</h1>
       
            <div className={`text-4xl py-1 sm:text-7xl  font-bold ${theme==='light'?'text-gray-700':'text-white'}`}><TypeAnimation sequence={["Yash Bhalerao,",10000]} wrapper="span" speed={5} /></div>
            {/* <h2 className='text-4xl py-1 sm:text-7xl font-bold text-white'>
                Yash Bhalerao,
            </h2> */}
            <p className='text-gray-400 max-w-md'>
              A frontend developer who loves to create responsive designs
            </p>

            <div>
                <Link to='about' smooth duration={500}>
                <button  className='group text-white  w-fit px-3 py-3 my-2 items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500  border-none flex cursor-pointer '>
                    <p className='mx-1 md:my-1 '>Scroll Down</p>
                    <span className='group-hover:rotate-90  duration-200'><AiOutlineArrowRight size={19}/></span>
                    
                </button>
                </Link>
                <div className= {`flex ${theme==='light'?'text-black':'text-white'}`}>
                  <div className=" flex hover:-translate-y-0.5  hover:text-blue-500 hover:scale-110 duration-150 py-2 mr-1  ml-0.5">
                    <a href="https://www.linkedin.com/in/yash-bhalerao-67b987287/" target='_blank'><AiFillLinkedin size={23}/></a>
                  </div>
                  <div className=" flex hover:-translate-y-0.5  hover:text-blue-500 hover:scale-110 duration-150 py-2  mr-1 ">
                    <a href="https://github.com/yash-123-yash?tab=repositories" target='_blank'><AiFillGithub size={23}/></a>
                  </div>
                  <div className=" flex hover:-translate-y-0.5  hover:text-blue-500 hover:scale-110 duration-150 py-2  mr-1">
                    <AiFillMail size={23}/>
                  </div>
    
                </div>

            </div>
        </motion.div>

        <motion.div
           initial={{display:'hidden',opacity:0,scale:0.975}}
           whileInView={{
                        display:'show',
                        opacity:1,
                        scale:1,
                        transition:{duration:1}  
                      }}
          
           viewport={{
                      //  once:true ,
                        opacity:0}} 
          className=" md:hover:scale-105 duration-300 rounded-3xl md:w-1/4 md:h-2/3 mt-6 md:mt-0 lg:mt-6 lg:w-2/6 ">
          <div className="md:overflow-hidden flex flex-col rounded-3xl ">
            <img src={heroImage} alt="my profile" 
            className='md:hover:brightness-105 brightness-95 md:hover:scale-105 duration-300 rounded-3xl mx-auto  mt-2 md:mt-0 w-1/2 md:w-full md:h-full object-cover ' />
            
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
