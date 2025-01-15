import React from 'react'

function Skills() {

    const skills=[
        {
            skill:"HTML",
            per:"85%"
        },
        {
            skill:"css",
            per:"75%"
        },
        {
          skill:"tailwind css",
          per:"65%"
      },
        {
            skill:"js",
            per:"70%"
        },
        {
            skill:"React js",
            per:"75%"
        },
        {
            skill:"Php",
            per:"40%"
        },
        {
            skill:"mysql",
            per:"80%"
        },
    ]
  return (
    <div name="skills" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white px-7'>
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 ">
          <div className="mt-7 flex justify-center flex-col items-center">      
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
            <p className='py-6'>Technologies that i khnow</p>
          </div>    
        </div>

        {/* <div className="flex flex-col">
          {
            // console.log(skill.skill)
            skills.map((skill,id)=>(
                <>
                <div className="pb-5">
                <div className="flex justify-between pb-1">
                    <p className='ml-1'>{skill.skill}</p>
                    <p>{skill.per}</p>
                </div>
                <div className="border-b-2 border-gray-500">
                    <div className={`bg-blue-300  h-1 `} style={{width:`${skill.per}`}} >
                    </div>
                </div>
              </div>
                </>
            ))
          }   
        </div> */}

        <div className="grid grid-cols-2 ">
          {
            skills.map((skill,id)=>(
              <>
              <div className=" p-2 md:text-2xl  m-5 border-b-2 border-l-2 border-r-2 rounded-md hover:bg-gradient-to-b from-transparent from-25% to-blue-500 duration-200 hover:scale-105">{skill.skill}</div>
              </>
          ))
          }
          
          {/* <div className="bg-red-300 m-3">html</div>
          <div className="bg-red-300 m-3">html</div> */}
        </div>

      </div>
    </div>
  )
}

export default Skills
