import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-scroll';
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
// import { FaInstagram } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div name='contact' className='w-full  h-full bg-gradient-to-b from-black to-gray-800 text-white '>
      <div className="  flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8 mt-16 ">
          <div className="mt-7 flex justify-center flex-col items-center">      
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact&nbsp;&nbsp;Me</p>
          <p className='py-4'>get in touch with me</p>
          </div>
            
        </div>

        <div className="flex flex-col  justify-center items-center ">
            <div className="flex md:w-4/5 flex-col md:flex-row w-11/12 justify-center ">
              <div className=" w-full md:w-1/2  rounded-md  pb-6 flex flex-col mr-10 md:mr-6 items-center justify-center md:text-xl text-sm ">
                <div className=" border-2 rounded-md border-white flex flex-col justify-center items-center py-4 px-11 w-full  mb-6">
                  <AiOutlineWhatsApp size={25}/>
                  <h1 className='mt-2 font-bold'>whatsApp</h1>
                  <h1 className=' '>+91 8432601748</h1>
                </div>
                <div className="border-2 rounded-md border-white flex flex-col justify-center items-center py-6 px-11 w-full  mb-6">
                  <AiOutlineMail size={25}/>
                  <h1 className='mt-2 font-bold'>email</h1>
                  <h1 className=' '>yashbhalerao@gmail.com</h1>
                </div>
                <div className="border-2 rounded-md border-white flex flex-col justify-center items-center py-6 px-11 w-full  mb-6">
                  <AiOutlineInstagram size={25}/>
                  <h1 className='mt-2 font-bold'>Instagram</h1>
                  <h1 className=' '>Yash_Bhalerao</h1>
                </div>
                {/* <h1 className=''></h1> */}
              </div>
              <form action="https://getform.io/f/aolljkdb"  method='POST' className='flex flex-col w-full md:w-2/3 h-full '>
                <input type="text" name='name' placeholder='enter your name' 
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-6 py-3'/>

                <input type="text" name='email' placeholder='enter your name' 
                className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-6 py-3'/>

                <textarea name="message" placeholder='Enter yoour message' rows="8" id=""
                className='p-2 bg-transparent border-2 rounded-md focus:outline-none mb-6 py-3'></textarea>

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
            
        </div>
        
      </div>
      
    </div>
  )
}

export default Contact
