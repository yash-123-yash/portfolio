import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';

function Navbar() {
    
  const [nav,setNav]=useState(true)

  const links=[
    {
      id:1,
      link:"home"
    },
    {
      id:2,
      link:"about"
    },
    {
      id:3,
      link:"skills"
    },
    {
      id:4,
      link:"project"
    },
    {
      id:5,
      link:"contact"
    },
    
  ]

  return (
    <>
    <div  className="z-10 flex justify-between items-center w-full h-20 bg-black text-white fixed px-4">
         <div className="">
          <h1 className='text-2xl md:text-3xl font-signature inline border-b-2 border-blue-200'>Yash Bhalerao</h1>
         </div>
      

         {/* when my width screen less then 768px then frist hinden x */}
         <ul className='hidden md:flex'>
          {/* <li className='px-4 cursor-pointer capitalize text-gray-400 hover:text-white hover:scale-110 duration-200'>Home</li> */}
          {
            links.map(({id,link})=>(
             <li key={id} className=' px-4 cursor-pointer capitalize text-gray-400 hover:text-white hover:scale-110 duration-200'>
              
              
              <Link to={link} smooth duration={500}>{link}</Link>
             </li>
            ))
          }
         </ul>

         <div onClick={()=>setNav(!nav)} className="cursor-pointer px-2 z-10 text-gray-400 hover:text-white hover:scale-110 duration-200 md:hidden">

          {nav ? <AiOutlineMenu  size={30}/> : <AiOutlineClose size={30}/>}
          
         </div>

         { !nav && (
          <ul className='flex flex-col justify-center items-center bg-black absolute right-0 top-20 w-1/4 md:hidden'>
          {/* <li className='text-red-500 py-2'>home</li> */}
          {
            links.map(({id,link})=>(
             <li key={id} className='px-4 py-1.5 cursor-pointer capitalize text-gray-400 hover:text-white hover:scale-110 duration-200'>
              <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            ))
          }
          
         </ul>
         )}

         
    </div>
    </>
  )
}

export default Navbar
