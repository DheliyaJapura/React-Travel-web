import React from 'react'
import styled from 'styled-components'
import {FaAlignJustify} from 'react-icons/fa';

import { Route, Routes, BrowserRouter,Link,} from 'react-router-dom'


function Navbar() {
  return (
  <Container className='container'>
    <Header>
      <Logo className='logo'>
        <a href='#'><span>T</span>ravel</a>
      </Logo>
      
    <Nav className='navbar'>
     
        <a href='#home'>Home</a>
        <a href='#services'>Services</a>
        <a href='#packages'>Packages</a>
        <a href='#footer'>Contact Us</a>
     
    </Nav>

      <Menu>
        <i id='menubar'><FaAlignJustify/></i>
      </Menu>
    </Header>
   

  </Container> 
    

  )
}

export default Navbar

const Container = styled.div`
  
`

const Header = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0;
    background: #333;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 9%;
    text-align: center;
  
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

    a{
      color: white;
      margin: 1rem;
      text-align: center;
      align-items: center;
      overflow: hidden;
      font-family: 'Kaushan Script', cursive;
      
    }
    a:hover{
      color:#ffa500;
    }
  
`

const Menu = styled.div`
    i{
      color: white;
      font-size: 28px;
      margin-left: .5rem;

    }

`
const Logo = styled.div`
    font-size: 2.5rem;
    font-weight: bolder;
    span{
      color: orange
    }

    a{
      color: white;
    }
`

