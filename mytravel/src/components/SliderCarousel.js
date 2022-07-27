import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';


function SliderCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    let videoBtn = document.querySelectorAll('.vid-btn');
  
    videoBtn.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            document.querySelector('.slide .active').classList.remove('active');
            btn.classList.add('active');
            let src = btn.getAttribute('data-src');
            document.querySelector('#video-slider').src = src;
        });
    });

    return (
    <Container className='cont'>
        <Section className='sec'>
            <h3>Adventure is Worthwhile</h3>
            <p>Discover New Places With Us, Adventure Awaits</p>
            <a className='btn' href='#'>Discover More</a>
        </Section>

        <div className='slide'>
            <span className='vid-btn active' data-src='./assets/vid-1.mp4'></span>
            <span className='vid-btn' data-src='./assets/vid-2.mp4'></span>
            <span className='vid-btn' data-src='./assets/vid-3.mp4'></span>
            <span className='vid-btn' data-src='./assets/vid-4.mp4'></span>
            <span className='vid-btn' data-src='./assets/vid-5.mp4'></span>

        </div>

        <div className='video-container'>
            <video src='./assets/vid-1.mp4' id='video-slider' loop autoPlay muted />
        </div>
    </Container>
  )
}

export default SliderCarousel

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    z-index: 0;

    .video-container{
        video{
            position: absolute;
            top: 0; left: 0;
            z-index: -1;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .slide{
        padding: 1rem;
        border-radius: 5rem;
        background: rgba(0,0,0,.7);
        position: relative;
        top: 10rem;

        .vid-btn{
            height: 2rem;
            width: 2rem;
            display: inline-block;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
            margin: .5rem;
        }

        .vid-btn.active{
            background: orange;
        }

    }

`

const Section = styled.div`
    text-align: center;
        h3{
            font-size: 4.5rem;
            color: #fff;
            text-transform: uppercase;
            text-shadow: 0.3rem .5rem rgba(0,0,0,.1);
        }

        p{
            font-size: 2.5rem;
            color: #fff;
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
        color: #fff;
      }

      .btn:hover{
        background: rgba(255,165,0,.2);
      }

`

