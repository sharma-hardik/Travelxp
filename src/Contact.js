import React from 'react'
import styled from 'styled-components'
const Contact = () => {
  return (
    <ContactStyle>
    <div className='HeroSection'>
      <div className='form-layout'>
        <div className='form'>
          <input type="text" name="name" id="name" placeholder='NAME'/>
          <input type="email" name="email" id="email" placeholder='EMAIL' />
          <input type="number" name="number" id="number" placeholder='NUMBER' />
          <textarea name="text" id="message" cols="45" rows="5" placeholder='MESSAGE'></textarea>
          <button type="submit" value="submit">SUBMIT</button>
        </div>
      </div>
     
    </div>
    </ContactStyle>
  )
}
const ContactStyle = styled.div`
background-image: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),url('https://demo.w3layouts.com/demos_new/template_demo/18-08-2020/traversal-liberty-demo_Free/156905689/web/assets/images/banner2.jpg');
.HeroSection{
  width: 100%;
  height: 90vh;
  display: flex;
  .form-layout{
    width: 50%;
    height: 90vh;
    padding: 20px;
    border: 0px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form{
    width: 70%;
    height: 80vh;
    border: 0px solid red;
    background-color: white;
    border-radius: 10px;
    
    box-shadow: 4px 8px 8px 4px;
    padding: 20px;
    #name,#email,#number{
      width: 100%;
      height: 3vh;
      padding: 20px;
      background-color: #f2f2f2;
    
      margin-top: 30px;
      border: none;
    }
    #message{
      padding: 15px;
      background-color: #f2f2f2;
      border: none;
      margin-top: 30px;
    }
    button{
      padding: 12px;
      padding-left: 20px;
      padding-right: 20px;
      background-color: orange;
      margin-top: 15px;
      text-align: center;
      border: none;
    }
  }
}
`
export default Contact