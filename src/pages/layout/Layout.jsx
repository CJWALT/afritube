import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../component/header/Header'


function Layout() {
  return (
    <>
    
        <Header/>
        <Outlet/>
    </>
  )
}

export default Layout