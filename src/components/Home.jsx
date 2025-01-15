import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import heroImage from '../assets/profile1.jpeg'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center md:justify-around h-full px-4 ">
        <div className="mt-24 flex flex-col justify-center h-9/10">
          <h1 className='md:text-2xl'>I'm,</h1>
            <TypeAnimation sequence={["Yash Bhalerao,",10000]} wrapper="span" speed={5} className='text-4xl py-1 sm:text-7xl font-bold text-white'/>
            {/* <h2 className='text-4xl py-1 sm:text-7xl font-bold text-white'>
                Yash Bhalerao,
            </h2> */}
            <p className='text-gray-400 max-w-md'>
              A frontend developer who loves to create responsive designs
            </p>
            <div className="">
                <Link to='about' smooth duration={500}>
                <button className='group text-white  w-fit px-3 py-3 my-2 items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500  border-none flex cursor-pointer '>
                    <p className='mx-1 md:my-1 '>Scroll Down</p>
                    <span className='group-hover:rotate-90  duration-200'><AiOutlineArrowRight size={19}/></span>
                    
                </button>
                </Link>
                <div className= "flex">
                  <div className="text-white flex hover:-translate-y-0.5  hover:text-blue-500 hover:scale-110 duration-150 py-2 mr-2 ml-0.5">
                    <AiFillLinkedin size={23}/>
                  </div>
                  <div className="text-white flex hover:-translate-y-0.5  hover:text-blue-500 hover:scale-110 duration-150 py-2 mr-2">
                  <a href="https://github.com/yash-123-yash?tab=repositories" target='_blank'><AiFillGithub size={23}/></a>
                  </div>
                  <div className="text-white flex hover:-translate-y-0.5  hover:text-blue-500 hover:scale-110 duration-150 py-2 mr-2">
                    <AiFillMail size={23}/>
                  </div>
    
                </div>

            </div>
        </div>

        <div className=" md:hover:scale-105 duration-300 rounded-3xl md:w-1/3 md:h-2/3 mt-6">
        <div className="md:overflow-hidden flex flex-col rounded-3xl ">
            <img src={heroImage} alt="my profile" 
            className='md:hover:brightness-105 brightness-95 md:hover:scale-105 duration-300 rounded-3xl mx-auto  mt-2 w-1/2 md:w-full md:h-full object-cover' />
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
