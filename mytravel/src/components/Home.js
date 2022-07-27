import React from 'react'
import Navbar from './Navbar' 
import styled from 'styled-components'

import Booking from './Booking'
import Packages from './Packages'
import Services from './Services'
import Gallery from './Gallery'
import Footer from './Footer'
import SliderCarousel from './SliderCarousel'



function Home() {
  return (
    <Container id='home'>
        <Navbar/>
        <SliderCarousel/>
        <Booking/>
        <Gallery/>
        <Services/>
        <Packages/>
        <Footer/> 
    </Container>
  )
}

export default Home

const Container = styled.div`
    
`

const Video = styled.div`

`
 {/* <Route path='/Booking' element={<Booking/>} />
        <Route path='/Gallery'element={<Gallery/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Packages' element={<Packages/>}/>
        <Route path='/Footer' element={<Footer/>}/> */}