import React from 'react';
import styled from 'styled-components'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom'
import Sample from './components/Sample';

function App() {
  return (
    <>
    <Router>
      <Routes>  
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/sample' element={<Sample/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

const Container = styled.div`

`