import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Objectives from './components/Objectives'
import Track from './components/Track'
import Services from './components/Services'
import Facility from './components/Facility'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Objectives />
      <Track />
      <Services />
      <Facility />
    </div>
  )
}

export default App