import React from 'react'
import styled from 'styled-components'
const About = () => {
  return (
    <AboutStyle>
    <div className='HeroSection'>
      <div className='story'>The Story
      </div>
    
      <div className='aboutus'><h2>About Us</h2> </div>
      <div className='image'><img src="https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/1.jpg" alt="img" /></div>
      <div className='heading'><h1>Time To See The World</h1>
      <hr/>
      </div>
      <div className='description'><p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia<br/><br/>

Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.</p></div>
    </div>
    </AboutStyle>
  )
}
const AboutStyle=styled.div`

.HeroSection{
  color: white;
  display: grid;
  background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  height: 90vh;
  div{
    border: 0px solid red;
    padding-left: 25px;
    padding: 10px;
  }
  .story{
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 20px;
    font-weight:700;
  }
  .aboutus{
    grid-column-start: 1;
    grid-column-end: 4;
    color: orange;
    padding: 20px;
    
  }
  .description{
    padding: 20px;
    font-size: 20px;
  }
  .heading{
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .image{
    grid-row-start: 3;
    grid-row-end: 5;
    img{
      border-radius: 10px;
      width: 530px;
      height: 350px;
    }
  }
}
`

export default About