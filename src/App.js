import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Service' element={<Service/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
     </>
  )
}

export default App