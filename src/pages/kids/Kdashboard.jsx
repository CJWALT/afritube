import React from 'react'
import {IoIosPartlySunny} from 'react-icons/io'
import { Link, Outlet } from 'react-router-dom'
import {MdDesktopMac, MdFavorite} from 'react-icons/md'
import NavButton from '../../component/navButton/NavButton'

function Kdashboard() {

  let name = 'Tolu'
  return (
    <>
      <h4 className="  pt-4 pb-2 text-center font-semibold text-xl flex justify-center">
        <IoIosPartlySunny className='mr-2 self-center'/> Good Morning {name}
      </h4>
      <NavButton />
      <div className="max-w-4xl mx-auto mt-11 px-4 sm:px-6 md:px-8">
          <div className="flex justify-left pl-10 gap-5">
              <div className='flex flex-col align-center px-2 pt-2 pb-6 text-sm bg-green-200 rounded'>
                <Link to='/kdashboard' className='flex flex-col'>
                <MdDesktopMac className='self-center text-xl'/>
                Watch</Link>

              </div>

              <div className='flex flex-col align-center px-2 pt-2 pb-6'>
              <Link to='/kdashboard/favorite' className='flex flex-col text-sm'>
                <MdFavorite className="text-red-500 text-xl self-center"/>
              Favorites</Link>
          
              </div>

          </div>            
          

      </div>
      
    
    

      {/* <Watch/> */}
        <Outlet />

      {/* <Routes>

          <Route to='/watch' element={<Watch/>}/>
          <Route to='/favorite' element={<Favorite/>}/>
      </Routes> */}
    </>
      )
}

export default Kdashboard