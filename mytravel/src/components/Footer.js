import React from 'react'
import styled from 'styled-components'
import {FaPhone,FaMailBulk,FaMapMarkerAlt,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaTiktok} from 'react-icons/fa';


function Footer() {
  return (
    <Container classname ='contain' id='footer'>
        <Logo>
            <a href='#'><span>T</span>ravel</a>
        </Logo>
        <Box classname ='box'>
            <Contact>
                <h1>Contact Us</h1>
                 <p>We are here to help you</p>
             </Contact>
            <Content classname ='content'>
                <InputBox>
                        <div>
                            <h3>Name</h3>
                            <input type='text' placeholder='Enter your name'/>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <input type='text' placeholder='Enter your email'/>
                        </div>
                        <div>
                            <h3>Tell us your issue ?</h3>
                            <input type='text' placeholder='Enter your problem'/>
                        </div>
                        <button value='submit' href='#'>Submit</button>
                </InputBox>

                <Information>
                    <h3>Contact information</h3>
                    <p>Fill up teh form and our team will
                        get back to you within 24 hours
                    </p>

                    <div className='mark'>
                        <i><FaPhone/><p>+1 768 988 234</p></i>
                    </div>
                    <div className='mark'>
                        <i><FaMailBulk/><p>travelweb@gmail.com</p></i>
                    </div>
                    <div className='mark'>
                        <i><FaMapMarkerAlt/><p>536/E Flower rd pitsburge state</p></i>
                    </div>

                    <div className='social'>
                        <i><FaFacebookSquare/></i>
                        <i><FaTwitterSquare/></i>
                        <i><FaInstagramSquare/></i>
                        <i><FaTiktok/></i>
                    </div>
                </Information>
             </Content>
              
        </Box>        
        
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFED;
    margin-top: 5rem;
       
    

`

const Logo = styled.div`

    padding: 2rem 1rem;
    background: black;


    a{
        font-size: 2.5rem;
        font-weight: bold;
        color: #fff;
       
        span{
            color: orange;  
        }
    }
`

const Box = styled.div`
    
    display: flex;
    flex-direction: column;
`



const Contact = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        font-size: 1.7rem;
        color: black;
        font-family: 'Kaushan Script', cursive;
   
    }

    p{
        color: black;
        
    }
`


const Content = styled.div`
   display: flex;
   margin: 5rem;


`


const InputBox = styled.div`
    
    width:100%;


    input{
        width: 60%;
        height: 30%;
        box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
        border-radius: .2rem;
        border: .1rem solid black;
        
    }

    input:hover{
        border-color: orange;
    }


    button{
        background: black;
        color: #fff;
        padding: .8rem 3rem;
        font-size: 1rem;
        border: .2rem solid white;
        margin-top: 1rem;
        
        
        

    }

    button:hover{
        background: orange;
        border: .2rem solid black;

    }

`

const Information = styled.div`
    display: flex;
    flex-direction: column;
    background: black;
    width: 80%;

    h3{
        color: #fff;
        font-size: 1.7rem;
        padding: .3rem 1rem;
        text-decoration: none;
        

        
    }

    p{
        color: #fff;
        font-size: 1rem;
        margin-top: .2rem;
        padding: .3rem 1rem;
    }

     :hover{
    box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
}

    .mark{
        display: flex;
        padding: .3rem 1rem;

        i{
            display: flex;
            color: #fff;
            font-size: 1rem;
            
        }

        p{
            margin-top: .2rem;
            color: white;
            font-weight: regular;
            font-size: .9rem;
        }
    }

    .social{
        padding: .3rem 1rem;
        margin-bottom: 2rem;

        i{
            margin: 1rem;
            color: #fff;
            font-size: 1rem;
        }
    }
`

