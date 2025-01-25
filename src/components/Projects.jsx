import React from 'react'
// import darkLight from "../assets/darkLight.png"
import { projects } from '../data/projectsData'
import { AiOutlineArrowRight } from "react-icons/ai";
// bg-gradient-to-b to-black from-gray-800

function Projects({theme}) {



  return (
    <div name="project" className={`${theme==='light'? 'bg-bg text-black':'bg-gradient-to-b to-black from-gray-800 text-white'} w-full md:h-screen pt-8  `}>
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-16 md:mt-14 flex justify-center flex-col items-center">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-12 '>Projects</p>
            <p className='py-6 md:pt-3 md:pb-0'>check my projects</p>
        </div>


        



 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-8 ">
        {
            projects.map(({id,src,link,title})=>(
                <div className="duration-200 hover:scale-105 mb-2 scale-105">
                  {/* <p className='pb-3 text-blue-300'>{title}:-</p> */}
                  <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4">
            
                    <img src={src} alt="" className='rounded-md ' />
                    {/* <a href={`${link}`} target='_blank'> */}
                      <p className='py-2 px-1  text-white'>{title}:-</p>
                    
                      <div className="flex items-center justify-center ">
                        <button className=' mr-2 border-2 border-l-1 border-r-1 w-full rounded-lg py-1 px-3 text-sm md:text-1xl'><a href={`${link}`} target='_blank'>code</a></button>
                        <button className='  border-2 border-l-1 border-r-1 w-full rounded-lg py-1 px-3 text-sm md:text-1xl'><a href={`${link}`} target='_blank'>demo</a></button>
                      </div>
                    
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
