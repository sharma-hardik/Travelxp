import React,{useState} from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {CgFormatJustify} from "react-icons/cg";
const Header = () => {
  const [first, setfirst] = useState(false);
  return (
    <Head >
       <div><NavLink to="/"> <h3>Travel</h3> </NavLink>
       <CgFormatJustify onClick={()=>setfirst(!first)}/>
       </div>
        <div className='menu'>
           <Navbar first={first}/>
        </div>
    </Head>
  )
}
const Head = styled.header`
display: flex;

justify-content: space-around;
align-items: center;
border : 0px solid red;
background-color: white;
width: 100%;
height: 10vh;
a{
  text-decoration: none;
  color: black;
}
svg{
  display: none;
}
h3::after{
  content: "xp";
  color: orange;
}
 .menu{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
   a{
    text-decoration: none;
 
     font-weight: 700;
   }
 }
 @media(max-width:${({theme})=>theme.media.mobile}){
       display: unset;
       padding: 10px;
       .menu{
        display: unset;
        width: 100%;
       }
       svg{
  display: block;
}
       div:nth-child(1){
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 25px;
        
       }
      
 }
`
export default Header