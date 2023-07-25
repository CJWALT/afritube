import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {ImHome3} from 'react-icons/im'
import {RiParentFill} from 'react-icons/ri'
import {FcBinoculars} from 'react-icons/fc'
import {BiSearch} from 'react-icons/bi'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
        <header className="bg-white" > 
  
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
     <div className="flex lg:flex-1">
        <a href="#" className="-m-1 5 p-1 5">
          <img className="h-8 w-auto" src='./img/afrilogo.png'/>  
        </a>
      </div> 
      
        <div className={openMenu ? 'flex flex-col justify-between bg-menuBg rounded-2xl text-white column absolute w-50 top-0 p-6' : 'hidden'}>
         <div className='relative flex order-2 z-0'>
          <input
              type="search"
              name="search"
              placeholder="Search"
              className={openMenu ? "relative w-25 pl-10 pr-3 py-2 rounded-full border-2 border-borderColor order-2 text-black" : "relative w-25 pl-8 pr-3 py-2 border "}
            />
            <FcBinoculars className='absolute right-6 z-2 text-2xl self-center cursor-pointer'/>
            <BiSearch className='absolute left-5 z-2 text-black text-xl self-center cursor-pointer'/>
         </div>
          <div>
            <option className='hidden'>
              <select>
                english
              </select>
            </option>

            <div className='flex flex-col mb-8 gap-4 '>
              <NavLink to ='/parent' className="flex flex-row gap-4 align-center order-2 text-xl font-medium text-navColor"> <RiParentFill className='self-center rounded-full p-2 text-4xl bg-iconBg'/>Parent</NavLink>
              <NavLink to ='/'  className="flex flex-row gap-4 align-center text-xl font-medium"><ImHome3 className='self-center bg-gray-300 rounded-full p-2 text-4xl'/>Home</NavLink>
          </div>
        </div>
          
         </div>
      
      <div className="flex lg:hidden">
      { openMenu ?
        <button type="button" 
          className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          onClick={()=> setOpenMenu (false)}>
            off
          </button> :
          <button type="button" 
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={()=> setOpenMenu(true)}>
              on
            </button>
          }
      </div>
    </nav>
  </header>
    </>
  )
}

export default Header