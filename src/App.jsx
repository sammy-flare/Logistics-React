import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Objectives from './components/Objectives'
import Track from './components/Track'
import Services from './components/Services'
import Facility from './components/Facility'
import Impact from './components/Impact'
import Testimonial from './components/Testimonial'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Objectives />
      <Track />
      <Services />
      <Facility />
      <Impact />
      <Testimonial />
    </div>
  )
}

export default App