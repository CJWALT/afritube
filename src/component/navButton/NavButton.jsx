import React from 'react'
import { BiSolidVideos } from 'react-icons/bi'
import { IoGameController } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import {HiOutlineMusicNote} from 'react-icons/hi'
import {GiHut} from 'react-icons/gi'
import './NavButton.css'
function NavButton() {


  return (
    <div className='w-auto flex justify-center '>
        <div className='pt-2 pb-2 pl-6 pr-6  w-64 rounded-full flex justify-between flex-row bg-navButton' >
            <NavLink to='/' activeClassName="navActive"> <BiSolidVideos className='p-2 rounded-full bg-white text-4xl'/> </NavLink>
            <NavLink to='/games'> <IoGameController className='p-2 rounded-full bg-white text-4xl'/> </NavLink>
            <NavLink to='/music'> <HiOutlineMusicNote className='p-2 rounded-full bg-white text-4xl'/> </NavLink>
            <NavLink to='/gamecard'> <GiHut className='p-2 rounded-full bg-white text-4xl'/> </NavLink>
        </div>
    </div>
  )
}

export default NavButton