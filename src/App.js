import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Header from './Header'
import { ThemeProvider } from 'styled-components'

const App = () => {
    const theme = {
         media:{
          mobile:"768px",
          tab:"998px",
          laptop:"1024px",
         },
         font:{
          logo:"Bold",
          menulist:"Regular"

         },
         fontsize:{
          logo:"16px",
          menulist:"12px"
         },
        
    };
  return (
     <>
     <ThemeProvider theme={theme}>
      <Header/>
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
    
      </ThemeProvider>
     </>
  )
}

export default App