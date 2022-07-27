import React from 'react'
import styled from 'styled-components'
import {FaMapMarkerAlt,FaRegStar,FaRegStarHalf} from 'react-icons/fa';

function Packages() {
  return (
    <Container className='main' id='packages'>
    
        <h1>
        <span>P</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
      </h1>

      <Places className='place'>
        <div className='box'>
            <div className='content'>
                <img src='./assets/p-1.jpg'/>
                <h3><i id='map'><FaMapMarkerAlt/></i>Mumbai</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>
            <div className='stars'>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStarHalf/></i>
            </div>
            <div className='price'>$90<span>$120</span></div>
            <a href='#' className='btn'>Book now</a>
            </div>
        </div>
        <div className='box'>
             <div className='content'>
                <img src='./assets/p-2.jpg'/>
                <h3><i id='map'><FaMapMarkerAlt/></i>Sydney</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>
                <div className='stars'>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStarHalf/></i>
                </div>
            <div className='price'>$90<span>$120</span></div>
            <a href='#' className='btn'>Book now</a>
             </div>
        </div>
        <div className='box'>
            <div className='content'>|
                <img src='./assets/p-3.jpg'/>
                <h3><i id='map'><FaMapMarkerAlt/></i>Hawaii</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>
                <div className='stars'>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStarHalf/></i>
                </div>
            <div className='price'>$90<span>$120</span></div>
            <a href='#' className='btn'>Book now</a>
            </div>
        </div>
        <div className='box'>
            <div className='content'>
                <img src='./assets/p-4.jpg'/>
                <h3><i id='map'><FaMapMarkerAlt/></i>Paris</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>
                <div className='stars'>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStarHalf/></i>
                </div>
            <div className='price'>$90<span>$120</span></div>
            <a href='#' className='btn'>Book now</a>
            </div>
        </div>
        <div className='box'>
             <div className='content'>
                <img src='./assets/p-5.jpg'/>
                <h3><i id='map'><FaMapMarkerAlt/></i>Tokyo</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>
                <div className='stars'>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStarHalf/></i>
                </div>
            <div className='price'>$90<span>$120</span></div>
            <a href='#' className='btn'>Book now</a>
            </div>
        </div>
        <div className='box'>
             <div className='content'>
                <img src='./assets/p-6.jpg'/>
                <h3><i id='map'><FaMapMarkerAlt/></i>Egypt</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, velit. Culpa incidunt vitae nesciunt tempora repellendus, sit assumenda sed, vero enim, ad placeat animi cum quod nisi dolore voluptate saepe</p>
                <div className='stars'>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStar/></i>
                    <i><FaRegStarHalf/></i>
                </div>
            <div className='price'>$90<span>$120</span></div>
            <a href='#' className='btn'>Book now</a>
             </div>

        </div>
        

      </Places>
    
    </Container>
  )
}

export default Packages

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 5rem;

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

const Places = styled.div`
    
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 5rem;

    .box{
        flex: 1 1 40rem;
        border-radius: .5rem;
        overflow: hidden;
        box-shadow: 0 1rem 2rem rgba(0,0,0,.3);
    }

   .content {
        padding: 2rem;

        img{
            height: 25rem;
            width: 100%;
            object-fit: cover;
        }

        h3{
            font-size: 2rem;
            color: #333;
            padding: 1rem 0;
            font-family: 'Kaushan Script', cursive;
            i{
                color: orange;
        }

        p{
            font-size: 1.7rem;
            padding: 1rem 0;
            color:#666;
        }
   }

   .stars{
        font-size: 1.7rem;
        color: orange;
                color: orange;
            }
           
   }

   .price{
        font-size: 2rem;
        color: #333;
        padding-top: 1rem;
        span{
            color:#333;
            font-size: 1.5rem;
            text-decoration: line-through;
        }
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