import React from 'react'
import profile2 from '../assets/profile2.jpeg'

function About() {
  return (
    <div name="about" className='w-full h-screen  text-white bg-gradient-to-b to-black from-gray-800 md:px-20'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w- h-full ">
            

            <div className="flex md:mt-20 flex-col-reverse lg:flex-row justify-center items-center md:scale-125 " >
                <div className="w-4/5 md:max-w-36  mt-5">
                        <div className="md:overflow-hidden flex flex-col rounded-3xl ">
                            <img src={profile2} alt="my profile" 
                            className='md:hover:brightness-105 brightness-95 md:hover:scale-105 duration-300 rounded-3xl mx-auto  mt-2 w-1/2 md:w-full md:h-full  object-cover scale-90 md:scale-110'  />
                            
                        </div>
                </div>        
                <div className=" ml-8 mt-16 md:mt-0">
                  <div className="pb-8  mt-10 md:mt-0 md:visible flex justify-center">
                     <p className='text-4xl font-bold   inline border-b-4 border-gray-500  '>About&nbsp;&nbsp;Me</p>
                     
                 </div>
                <p className=' font-signature2 md:text-sm'>
                I’m a frontend developer and a student at JSPM imperial College,Pune. I love creating websites that look great and work smoothly. Using tools like HTML, CSS, JavaScript, and frameworks like React, I focus on building fast, responsive, and user-friendly designs. I’m passionate about solving problems, learning new technologies, and improving my skills to deliver the best results.
            </p>
                </div>
            
            </div>

            <br />

            {/* <p className='md:text-xl'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga nostrum, nesciunt placeat similique officiis esse aperiam id eveniet sapiente quaerat, alias, architecto vero? Sit dicta minima itaque esse id.
            </p> */}
        </div>
    </div>
  )
}

export default About
