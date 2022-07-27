import React from 'react'
import styled from 'styled-components'
import {FaLandmark, FaPlane, FaHiking, FaBullhorn,FaUtensils} from 'react-icons/fa';



function Services() {
  return (
    <Container id='services'>
        <h1>
        <span>S</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h1>

        <Gallery classname='gallery'>
            <Box classname='box'>
                <Content classname='content'>
                    <i><FaLandmark/></i>
                    <h3>Affordable Hotels</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                </Content>
            </Box>
            <Box classname='box'>
                <Content classname='content'>
                    <i><FaUtensils/></i>
                    <h3>Food And Drinks</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                </Content>
            </Box>
            <Box classname='box'>
                <Content classname='content'>
                    <i><FaBullhorn/></i>
                    <h3>Safty Guide</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                </Content>
            </Box>
            <Box classname='box'>
                <Content classname='content'>
                    <i><FaPlane/></i>
                    <h3>Around The World</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                </Content>
            </Box>
            <Box classname='box'>
                <Content classname='content'>
                    <i><FaPlane/></i>
                    <h3>Fastest Travel</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                </Content>
            </Box>
            <Box classname='box'>
                <Content classname='content'>
                    <i><FaHiking/></i>
                    <h3>Adventures</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                </Content>
            </Box>    

        </Gallery>
    </Container>
  )
}

export default Services

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 5rem;
    background: #FFFFED;

    span{
        font-size: 3.5rem;
        background: rgba(255,165,0,.2);
        color: orange;
        border-radius: .5rem;
        display: inline-block;
        padding: .2rem 1rem;
        margin: 5px;

    
    }

 
    

    
`

const Gallery = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 5rem;
    
    
`

const Box = styled.div`
   flex: 1 1 30rem;
   border-radius: .5rem;
   padding: 1erm;
   text-align: center;

   :hover{
    box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
}



`

const Content = styled.div`

    i{
        color: orange;
        font-size: 5rem;
        padding: 1rem;
    }

    h3{
        font-size: 2.5rem;
        color: #333;
        font-family: 'Kaushan Script', cursive;

    }

    p{
        font-size: 1.5rem;
        padding: 1rem 0;
        color: #666;
    }

    

  `