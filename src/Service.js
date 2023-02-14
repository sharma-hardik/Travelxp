import React from 'react'
import styled from 'styled-components'
const Service = () => {
  return (
    <ServiceStyle>
    <h1>Service</h1>
    <br/>
    
    <div className='HeroSection'>
      <div className='place1'><h3>Brazil</h3></div>
      <div className='place2'><h3>India</h3></div>
      <div className='place3'><h3>Hong Kong</h3></div>
      <div className='place4'><h3>Singapore</h3></div>
      <div className='place5'><h3>Dubai</h3></div>
      <div className='place6'><h3>South Africa</h3></div>
      <div className='place7'><h3>America</h3></div>
    </div>
    </ServiceStyle>
  )
}
const ServiceStyle = styled.div`
text-align: center;
padding: 20px;
div{

  border: 0px solid red;
}
.HeroSection{
  
  display: grid;
  gap: 20px 50px;
  padding: 20px;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 300px 300px 300px;
  .place1,.place2,.place3,.place4,.place5,.place6,.place7{
   
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    border-radius: 10px;
  }
  .place1{
    background-image: url('https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
  }
  .place2{
    background-image: url('https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600');
    background-size: cover;
  }
  .place3{
     background-image: url('https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&w=600');
    background-size: cover;
  }
  .place4{
    background-image: url('https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600');
    background-size: cover;
  }
  .place5{
    background-image: url('https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=600');
    background-size: cover;
  }
  .place6{
    background-image: url('https://images.pexels.com/photos/51809/pexels-photo-51809.jpeg?auto=compress&cs=tinysrgb&w=600');
    background-size: cover;
  }
  .place7{
    background-image: url('https://images.pexels.com/photos/3030647/pexels-photo-3030647.jpeg?auto=compress&cs=tinysrgb&w=600');
    background-size: cover;
  }
}

`
export default Service