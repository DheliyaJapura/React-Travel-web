import React from 'react'
import styled from 'styled-components'

function Gallery() {
  return (
    <Container>
     <h1>
        <span>G</span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
    
      </h1>

        <Boxgallery className='boxgallery' id='gallery'>
            <Box className='box'>
                <img src='./assets/g-1.jpg'/>
                <Content className='content'>
                    <h3>Amazing Places</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                    <a href='#' className='btn'>See more</a>
                </Content>
            </Box>
            <Box className='box'>
                <img src='./assets/g-2.jpg'/>
                <Content className='content'>
                    <h3>Amazing Places</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                    <a href='#' className='btn'>See more</a>
                </Content>
            </Box>
            <Box className='box'>
                <img src='./assets/g-3.jpg'/>
                <Content className='content'>
                    <h3>Amazing Places</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                    <a href='#' className='btn'>See more</a>
                </Content>
            </Box>
            <Box className='box'>
                <img src='./assets/g-4.jpg'/>
                <Content className='content'>
                    <h3>Amazing Places</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                    <a href='#' className='btn'>See more</a>
                </Content>
            </Box>
            <Box className='box'>
                <img src='./assets/g-5.jpg'/>
                <Content className='content'>
                    <h3>Amazing Places</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                    <a href='#' className='btn'>See more</a>
                </Content>
            </Box>
            <Box className='box'>
                <img src='./assets/g-6.jpg'/>
                <Content className='content'>
                    <h3>Amazing Places</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                    <a href='#' className='btn'>See more</a>
                </Content>
            </Box>
            <Box className='box'>
                <img src='./assets/g-7.jpg'/>
                <Content className='content'>
                    <h3>Amazing Places</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                    <a href='#' className='btn'>See more</a>
                </Content>
            </Box>
            <Box className='box'>
                <img src='./assets/g-8.jpg'/>
                <Content className='content'>
                    <h3>Amazing Places</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>  
                    <a href='#' className='btn'>See more</a>
                </Content>
            </Box>
        </Boxgallery>
    </Container>
  )
}

export default Gallery


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    span{

        font-size: 3.5rem;
        background: rgba(255,165,0,.2);
        color: orange;
        border-radius: .5rem;
        display: inline-block;
        padding: .2rem 1rem;
        margin: 5px;
    


    }

    .boxgallery .box{
        overflow: hidden;
        box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
        border: 1rem solid #fff;
        border-radius: .5rem;
        flex: 1 1 30rem;
        height: 25rem;
        position: relative;
    }


    .box:hover .content{
        top: 0;
    }

    .boxgallery .box img{
        height:  100%;
        width: 100%;
        object-fit: cover;
    }

    

`

const Boxgallery = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1.5rem;

    
`

const Box = styled.div`








    

  





`

const Content = styled.div`


    position: absolute;
    top: -100%; left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    background: rgba(0,0,0,.7);
    padding: 2rem;
    padding: .5rem;



    
    h3{
        font-size: 2.5rem;
        color: orange;
        font-family: 'Kaushan Script', cursive;
    }

    p{
        font: 1.5rem;
        color: #eee;
        padding: .5rem 0;

    }

 .btn{
    display: inline-block;
    margin-top: 1rem;
    background: orange;
    padding: .8rem 3rem;
    border: .2rem solid orange;
    cursor: pointer;
    font-size: 1.7rem;
    }


    .btn:hover{
        background: rgba(255,165,0,.2);
        color: orange;
       }




`
