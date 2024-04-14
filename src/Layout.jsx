import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
        <Outlet/>      
      <Footer/>
    </>
  )
}

export default Layout

//whereever we give outlet only that value will be vhange above and botom remain same 
//then we have to go in index file and tell that file , that we are usisng a outlent and in that we do every work