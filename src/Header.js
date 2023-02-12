import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <NavLink to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdg1Mdh55R-GQiGK-BOFG9iBtHI8fsTGwzGw&usqp=CAU" alt="logo" /> </NavLink>
        <div className='menu'>
           <Navbar/>
        </div>
    </div>
  )
}

export default Header