import React from 'react'
// import darkLight from "../assets/darkLight.png"
import { projects } from '../Data/projectsData'
import { AiOutlineArrowRight } from "react-icons/ai";

function Projects() {



  return (
    <div name="project" className='bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-screen'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-16 md:mt-14 flex justify-center flex-col items-center">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-4'>Projects</p>
            <p className='py-6'>check my projects</p>
        </div>


        



 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
        {
            projects.map(({id,src,link,title})=>(
                <div className="duration-200 hover:scale-105">
                <p className='pb-3 text-blue-300'>{title}:-</p>
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            
                 <img src={src} alt="" className='rounded-md ' />
                 <a href={`${link}`} target='_blank'><div className="flex items-center justify-center ">
                 <button className=' my-1 border-b-1 border-l-1 border-r-1 w-full rounded-lg py-1 px-3'>code</button>
                 </div>
                 </a>
            </div>
            </div>
            ))
        }
        <div className=" flex justify-center items-center hover:scale-105 duration-200">
          <div className="flex flex-col justify-center items-center">
            <AiOutlineArrowRight className='-rotate-90 my-2' />
          <a href="https://github.com/yash-123-yash?tab=repositories" target='_blank'>For more Projects</a> 
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Projects
