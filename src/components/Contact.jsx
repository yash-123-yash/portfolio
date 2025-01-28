import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-scroll';
import { AiOutlineMail } from "react-icons/ai";
//import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import TwitterIcon from '../icons/TwitterIcon';
// import { FaInstagram } from "react-icons/fa";
//import { AiOutlineInstagram } from "react-icons/ai";
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';

function Contact({theme}) {
  return (
    <div name='contact' className={`w-full  h-full ${theme==='light'? 'bg-bg text-black':'bg-gradient-to-b from-black to-gray-800 text-white'} md:pt-28 lg:pt-10`}>
      <div className="  flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full   ">
        <motion.div 
            variants={fadeIn('up',0.9)}
            initial={{display:'hidden',opacity:0,scale:0.97}}
            whileInView={{
              display:'show',
              opacity:1,
              scale:1,
              transition:{duration:1.2}  
            }}

            viewport={{
             once:true ,
              opacity:0}} 
            className="pb-8 mt-16 ">
          <div className="mt-7 flex justify-center flex-col items-center">      
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact&nbsp;&nbsp;Me</p>
            <p className='py-4'>get in touch with me</p>
          </div>
            
        </motion.div>

        <motion.div 
                      // variants={fadeIn('down',0.9)}
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
            className="flex flex-col  justify-center items-center ">
            <div className="flex md:w-4/5 flex-col md:flex-row w-11/12 justify-center ">
              <div className=" w-full md:w-1/2  rounded-md  pb-6 flex flex-col mr-10 md:mr-6 items-center justify-center md:text-xl text-sm ">
                <div className={` border-2 ${theme==='light'?'bg-bg border-2 border-black':'bg-transparent border-white'} rounded-md  flex flex-col justify-center items-center py-4 px-11 w-full  mb-6`}>
                <a href="https://www.linkedin.com/in/yash-bhalerao-67b987287/" target='_blank' className='flex justify-center items-center flex-col'>
                  <AiFillLinkedin size={25}/>
                  <h1 className='mt-2 font-bold'>LinkedIn</h1>
                  <h1 className=' '>yashbhalerao</h1>
                  </a>
                </div>
                
                <div className={`border-2 rounded-md ${theme==='light'?'bg-bg border-2 border-black':'bg-transparent border-white'}  flex flex-col justify-center items-center py-6 px-11 w-full  mb-6`}>
                  <AiOutlineMail size={25}/>
                  <h1 className='mt-2 font-bold'>email</h1>
                  <h1 className=' '>yashbhalerao@gmail.com</h1>
                </div>
                <div className={`border-2 rounded-md ${theme==='light'?'bg-bg border-2 border-black':'bg-transparent border-white'}  flex flex-col justify-center items-center py-6 px-11 w-full  mb-6`}>
                <a href="https://www.linkedin.com/in/yash-bhalerao-67b987287/" target='_blank' className='flex justify-center items-center flex-col'>
                  <div className='bg-white rounded-md'><TwitterIcon size={25}/></div>
                  <h1 className='mt-2 font-bold'>twitter</h1>
                  <h1 className=' '>Yash_Bhalerao</h1>
                </a>
                </div>
                {/* <h1 className=''></h1> */}
              </div>
              
              <form action="https://getform.io/f/aolljkdb"  method='POST' className='flex flex-col w-full md:w-2/3 h-full '>
                <input type="text" name='name' placeholder='enter your name' 
                className={`p-2 bg-transparent border-2 rounded-md ${theme==='light'?'bg-bg border-2 border-black':'bg-transparent border-white'} text-white focus:outline-none mb-6 py-3`}/>

                <input type="text" name='email' placeholder='enter your email' 
                className={` p-2 bg-transparent border-2 rounded-md ${theme==='light'?'bg-bg border-2 border-black':'bg-transparent border-white'} text-white focus:outline-none mb-6 py-3`}/>

                <textarea name="message" placeholder='enter your message' rows="8" id=""
                className={`p-2 bg-transparent border-2 ${theme==='light'?'bg-bg border-2 border-black':'bg-transparent border-white'} rounded-md focus:outline-none mb-6 py-3`}></textarea>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Submit</button>
              </form>
            </div>
            <div className="hover:cursor-pointer hover:scale-105 duration-300">
              <Link to='home' smooth duration={500}>
              <div className='group flex justify-center items-center flex-col'>
              <AiOutlineArrowRight className='-rotate-90 my-2 text-center group-hover:-translate-y-2 group-hover:opacity-55 duration-500' />
              <div className='group-hover:translate-y-1 group-hover:opacity-75 duration-500'>Go on top</div>
              </div></Link>
              
            </div>
            
        </motion.div>
        
      </div>
      
    </div>
  )
}

export default Contact
