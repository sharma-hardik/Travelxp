import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div>
        <div className='logo'></div>
        <div className='menu'>
           <Navbar/>
        </div>
    </div>
  )
}

export default Header