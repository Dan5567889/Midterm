import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Mission from './Components/Mission'
import TeaOfTheMonthSection from './Components/TeaOfTheMonthSection'
import Locations from './Components/Locations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Mission/> } />
        <Route path='/Featured_Tea' element={ <TeaOfTheMonthSection/> } />
        <Route path='/Locations' element={ <Locations/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
