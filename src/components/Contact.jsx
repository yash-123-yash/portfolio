import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-scroll';

function Contact() {
  return (
    <div name='contact' className='w-full px-2 h-full bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className="  flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-16 ">
          <div className="mt-7 flex justify-center flex-col items-center">      
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact&nbsp;&nbsp;Me</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
          </div>
            
        </div>

        <div className="flex flex-col  justify-center items-center">
            {/* <div className="border-2 rounded-md border-white p-6 flex flex-col m-9 justify-center items-center">
              <h1 className='mb-5 text-3xl'>+91 8432601748</h1>
              <h1 className='text-3xl'>yashbhalerao@gmail.com</h1>
            </div> */}
            <form action="https://getform.io/f/aolljkdb"  method='POST' className='flex flex-col w-full md:w-2/3'>
                <input type="text" name='name' placeholder='enter your name' 
                className='active:bg-blue-500 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                <input type="text" name='email' placeholder='enter your name' 
                className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                <textarea name="message" placeholder='Enter yoour message' rows="8" id=""
                className='p-2 bg-transparent border-2 rounded-md focus:outline-none'></textarea>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Submit</button>
            </form>
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
