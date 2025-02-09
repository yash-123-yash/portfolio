import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

import portfolio from '../assets/portfolio.png'
import cart from '../assets/shoppingCart.png'
import darkLight from '../assets/darkLight.png'
import Todo from '../assets/Todo.png'
import movie from '../assets/movie.png'
import { fadeIn } from '../Variants';
import { motion } from 'framer-motion';

const projects=[
    {
        id:1,
        title:'Portfolio',
        src:portfolio,
        link:'https://github.com/yash-123-yash/portfolio',
        discription:"Developed a dynamic and responsive portfolio website.Implemented reusable components and ensured seamless navigation with a modern UI design.",
        deploy_link:'https://yash-123-yash.github.io/portfolio/index.html'
 
    },
    {
        id:2,
        title:'Shopping Cart',
        src:cart,
        link:'https://github.com/yash-123-yash/shoppingCart',
        discription:"shopping cart application using React.js & Context API for state management, enabling users to add items into cart, view cart summary, and calculate the total amount.",
        deploy_link:'https://shopping-cart-alpha-vercel.app/'  
 
    },
    {
        id:3,
        title:'Todo',
        src:Todo,
        link:'https://github.com/yash-123-yash/todo',
        discription:"A todo website help you stay organized & boost productivity.To prioritize your goals, with the functionality of edit and delete with an alert message.",
        deploy_link:'https://todo-three-chi-20.vercel.app/' 
    },
    {
        id:4,
        title:'Dark Light mode',
        src:darkLight,
        link:'https://github.com/yash-123-yash/LightDarrkMode',
        discription:"A visually stunning website with seamless dark and light mode functionality, offering users to use website in dark or night.",
        deploy_link:'https://light-darrk-mode.vercel.app/' 
    },
    {
        id:5,
        title:'Movie App',
        src:movie,
        link:'https://github.com/yash-123-yash/movie-app',
        discription:"A movie app that fetches real-time data using API to provide detailed movie descriptions, helping you explore your favorite film effortlessly.",
        deploy_link:'https://movie-app-sand-alpha-82.vercel.app/' 
    },
]

function Projects({theme}) {



  return (
    <div name="project" className={`${theme==='light'? 'bg-bg text-black':'bg-gradient-to-b to-black from-gray-800 text-white'} w-full md:h-screen pt-8 lg:pt-0`}>
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full lg:pt-0">
      <motion.div 
               variants={fadeIn('down',0.9)}
               initial={{display:'hidden',opacity:0}}
               whileInView={{
                        display:'show',
                        opacity:1,
                        scale:1,
                        transition:{duration:1.2}  
                      }}
              viewport={{
                       once:true ,
                        opacity:0}}
             className="pb-8 mt-16 md:mt-14 flex justify-center flex-col items-center">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-12 lg:pt-0'>Projects</p>
            <p className='py-6 md:pt-3 md:pb-0'>check my projects</p>
      </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 px-6 sm:px-8 ">
        {
            projects.map(({id,src,link,title,discription,deploy_link})=>(
                <motion.div
                // variants={fadeIn('up',0.9)}
                initial={{display:'hidden',opacity:0 ,scale:0.95}}
                whileInView={{
              display:'show',
              opacity:1,
              scale:1,
              transition:{duration:1.5}  
                }}

            viewport={{
            //  once:true ,
              opacity:0}}
            className="duration-200 hover:scale-105 mb-2 scale-105">
                  {/* <p className='pb-3 text-blue-300'>{title}:-</p> */}
                  <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4">
            
                    <img src={src} alt="" className='rounded-md ' />
                    {/* <a href={`${link}`} target='_blank'> */}
                      <p className={`pt-2 inline-block px-1 border-b-2 mb-3  ${theme==='light'?'text-black':'text-white '}`}>{title} :-</p>

                      <div className='mb-3 text-sm text-gray-500'>{discription}</div>
                    
                      <div className="flex items-center justify-center ">
                        <button className=' mr-2 border-2 border-l-1 border-r-1 w-full rounded-lg py-1 px-3 text-sm md:text-1xl'><a href={`${link}`} target='_blank'>code</a></button>
                        <button className='  border-2 border-l-1 border-r-1 w-full rounded-lg py-1 px-3 text-sm md:text-1xl'><a href={`${deploy_link}`} target='_blank'>demo</a></button>
                      </div>
                    
                  </div>
                </motion.div>
            ))
        }
        <motion.div className=" flex justify-center items-center hover:scale-105 duration-200">
          <div className="flex flex-col justify-center items-center">
            <AiOutlineArrowRight className='-rotate-90 my-2' />
          <a href="https://github.com/yash-123-yash?tab=repositories" target='_blank'>For more Projects</a> 
          </div>
        </motion.div>
        
        </div>
      </div>
    </div>
  )
}

export default Projects
