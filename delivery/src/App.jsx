import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Router } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Router>

    </div>
  )
}

export default App
