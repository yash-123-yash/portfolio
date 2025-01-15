import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'

function SocialLinks() {
  return (
    <div className='flex flex-col top-[45%] left-8 fixed'>
      <ul>
        <li className='text-white hover:text-blue-500'>
            <a href="">
                <AiFillLinkedin size={25}/>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
