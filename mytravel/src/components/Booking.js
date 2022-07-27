import React from 'react'
import styled from 'styled-components'

function Booking() {
  return (
    <Container>
         <Book className='book' id='booking'>
      <h1>
        <span>B</span>
        <span>o</span>
        <span>o</span>
        <span>k</span>
        <span className='space'> </span>
        <span>N</span>
        <span>o</span>
        <span>w</span>
      </h1>
    </Book>

    <Form className='form'>
      <Image className='image'>
        <img src='./assets/travel-tips.jpg' alt=''/>
      </Image>

      <form action=''>
        <div className='inputbox'>
          <h3>Where to?</h3>
          <input type='text' placeholder='place name'/>
        </div>
        <div className='inputbox'>
          <h3>How many?</h3>
          <input type='number' placeholder='number of people'/>
        </div>
        <div className='inputbox'>
          <h3>Arrivals</h3>
          <input type='date'/>
        </div>
        <div className='inputbox'>
          <h3>Leaving</h3>
          <input type='date'/>
        </div>
        <input type='submit' value='Book now' className='btn'/>

      </form>
    </Form>
    </Container>
  )
}

export default Booking



const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    

`

const Book = styled.div`
    
    text-align: center;
    padding-top: 8rem;
    
  

    span{

        font-size: 3.5rem;
        background: rgba(255,165,0,.2);
        color: orange;
        border-radius: .5rem;
        display: inline-block;
        padding: .2rem 1rem;
        margin: 5px;

    }

    span.space{
        background: none;
        
    }
   
`

const Form = styled.div`
  
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      align-items: center;
    
      .image{
        flex: 1 1 40rem;
      }

      .image img{
          width: 100%;
        }

    


     form{
      padding: 2rem;
      box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
      border-radius: .5rem;
      flex: 1 1 40rem;


      
      
      .form .inputbox{
        padding: .5rem 0;
        
      }

      .inputbox h3{
        padding: 1rem 0;
        font-size: 1.5rem;
        color: #666;
        font-family: 'Kaushan Script', cursive;
      }

      .inputbox input{
        width: 100%;
        border: 1rem soild rgba(0,0,0,.1);
        font-size: 1.5rem;
        text-transform: none;
        color: #333;
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
    }
   

`

const Image = styled.div`


`
