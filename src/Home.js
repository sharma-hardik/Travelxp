import React from 'react'
import styled from 'styled-components'
const Home = () => {
  return (<>
    <HomeStyle>
    <div className='HeroSection'>
       <div className='HeroText'>
        <div className="heading"><h2>Exploring your<br/> </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta nulla magnam dolor, aperiam cum, quibusdam quasi minus neque beatae modi fuga deleniti unde laudantium.</p>
        <button>Explore more</button></div>
       </div>
      
    </div>
    </HomeStyle>
    </>
  )
}
 const HomeStyle = styled.div`
 
 .HeroSection{
  background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg');
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  
  align-items: center;
  .HeroText{
    height: 40vh;
    width: 50%;
    border: 0px solid red;
    padding-left: 20px;
    h2{
      font-size: 40px;
      color: white;
      font-family: 'Gill Sans', 'Gill Sans MT', Trebuchet MS, sans-serif;
      text-transform: capitalize;
    }
    p
    {
      color:white;
    }
    button{
      margin-top:20px;
      padding: 10px;
      padding-left:15px ;
      padding-right: 15px;
      background-color: orange;
      color: white;
      
      border: 3px solid orange;
    }
    button:hover{
      background-color: transparent;
      color: orange;
      transition: all 500ms linear;
    }
    h2::after{
      content: "Travel Destination ";
      font-family: 'Montserrat', sans-serif;
      color: #ffad33;
    }
  }
 }

 `
export default Home