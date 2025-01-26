import React ,{useState} from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import { Frontend ,Backend,others} from '../Data/Skills.jsx'
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';


function Skills({theme}) {

    const [value,setValue]=useState('web')
    // console.log(value)

  return (
    <div name="skills" className={`w-full h-screen bg-gradient-to-b ${theme==='light'? 'bg-bg text-black':'bg-gradient-to-b from-black to-gray-800 text-white'} md:px-7 px-6 pt-40 md:pt-1`}>
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full mt-10 md:mt-0 ">
        <div className="pb-8 ">
          <motion.div 
                      // variants={fadeIn('down',0.9)}
                      
          
                      viewport={{
                      //  once:true ,
                        opacity:0}} 
              className=" flex justify-center flex-col items-center">      
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
            <p className='pt-3'>Technologies that i khnow</p>
          </motion.div>    
        </div>

        <div className="flex mb-4 ">
            <input type='radio' name='radio' id='web' className='hidden ' value='web' onChange={(e)=>setValue(e.target.value)} />
            <label htmlFor='web' className={`hover:scale-105  duration-300 cursor-pointer mr-5 border-2 ${theme==='light'?'border-black text-black':'border-white text-white '} py-2 px-4  md:text-1xl rounded-full text-xs ${value==='web'?'bg-blue-400 duration-200 ':''}`}>web development</label>
            <input type='radio' name='radio' id='others' className='hidden ' value='other'onChange={(e)=>setValue(e.target.value)}/>
            <label htmlFor='others' className={`hover:scale-105  duration-300 cursor-pointer mr-5 border-2 ${theme==='light'?'border-black text-black':'border-white text-white'} py-2 px-3 text-xs md:tex text-blackt-1xl rounded-full ${value==='other'?'bg-blue-400 duration-200':''}`}>others</label>
        </div>

        <div className="flex md:w-11/12  flex-col  items-center justify-center mt-6 md:flex-row ">
            {
                value==='web'?(
                <>
                <motion.div
                initial={{opacity:0 ,scale:0.95,marginTop:20}}
                whileInView={{
                  marginTop:0,
                  opacity:1,
                  scale:1,
                  transition:{duration:0.9}
                }}

                 viewport={{
                //  once:true ,
                 opacity:0}}
                 className={`md:mr-8 mb-8 w-full lg:w-11/12 md:h-full text-center border-2 ${theme==='light'?'border-black bg-fron':'border-white'} rounded-lg p-4 `}>
                 <h1 className='font-bold text-2xl mb-8'>Frontend</h1>
                  <div className="grid grid-cols-2 gap-4">
                    {
                       Frontend.map((item)=>(
                        <li className="flex list-none mb-4 lg:ml-10 ml-4 text-sm lg:text-1xl  ">
                            
                            <AiFillCheckCircle className='mr-2 mt-1'/>{item.Skill}
                            
                        </li>
                       )) 
                    }
                  </div>
                </motion.div>

                <motion.div
                initial={{opacity:0 ,scale:0.95,marginTop:20}}
                whileInView={{
                  marginTop:0,
                  opacity:1,
                  scale:1,
                  transition:{duration:0.9}
                }}

                 viewport={{
                //  once:true ,
                 opacity:0}} 
                 className={`md:mr-8 mb-8 w-full lg:w-11/12 h-full text-center border-2 ${theme==='light'?'border-black bg-fron':'border-white'} rounded-lg p-4 `}>
                  <h1 className='font-bold text-2xl mb-8'>Backend</h1>
                  <div className="grid grid-cols-2 gap-4">
                    {
                       Backend.map((item)=>(
                        <li className="flex list-none mb-4 ml-4 lg:ml-10 text-sm lg:text-1xl">
                            
                            <AiFillCheckCircle className='mr-2 mt-1'/>{item.Skill}
                            
                        </li>
                       )) 
                    }
                  </div>
                </motion.div>
                </>
            ):
            (
             <div className={`h-full md:w-1/2 lg:w-5/12 md:mr-8 mb-8 text-center border-2 ${theme==='light'?'border-black bg-fron':'border-white'} rounded-lg p-4 `}>
                <h1 className='font-bold text-2xl mb-8'>others</h1>
                <div className="grid grid-cols-2 gap-4">
                    {
                       others.map((item)=>(
                        <li className="flex list-none mb-4 lg:ml-6 md:ml-4 text-sm lg:text-1xl">
                            <div className=''><AiFillCheckCircle className={` mr-2 mt-1 ${theme==='light'?' bg-fron':'border-white'} `}/></div>{item.Skill}
                            
                            
                        </li>
                       )) 
                    }
                </div>
            </div> 
            )
            }
            
        </div>

      </div>
    </div>
  )
}

export default Skills
