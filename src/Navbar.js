import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = ({first}) => {
 
  return (
    <Nav>
    <ul className={first?"show":"hide"}>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/About">About</NavLink></li>
    <li><NavLink to="/Service">Service</NavLink></li>
    <li><NavLink to="/Contact">Contact</NavLink></li>
    </ul>
    </Nav>
  )
}

const Nav = styled.nav`
width: 100%;
transition:all 500ms linear;
ul{
  list-style: none;
  display: flex;
  justify-content: space-around;
 
  li:hover{
    border-bottom: 3px solid orange;
  }
}
@media(max-width:${({theme})=>theme.media.mobile}){
  .show{
  display: block;
  transition: all 30s linear;
}
.hide{
  display: none;
}
  ul{
    display: unset;
   text-align: center;
   background-color: whitesmoke;
 
   li{
    padding: 10px;
   }
   li:hover{
    background-color: orange;
   }
  }
}
`
export default Navbar
