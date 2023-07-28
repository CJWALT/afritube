import React, { useContext } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Kdashboard from '../components/Kdashboard'
import ParentSecModal from '../components/ParentSecModal'
import Favouritecontext from '../store/reducer'

const MainLayout = () => {
  const ctx = useContext(Favouritecontext)
  const parentsec = ctx.state.parentSecModal;
  console.log(parentsec)
  return (
    <div className='bg-white h-[100vh]'>
      <Header />
      <Kdashboard />
   { parentsec &&  <ParentSecModal /> }
      <Outlet />
    </div>
  )
}

export default MainLayout
