import React from 'react'
import Hero from './components/hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen overflow-x-hidden '>
    <Navbar/>
     <Hero/>
     <About/>
     <Features/>
     <Story/>
     <Contact/>
     <Footer/>
    </main>
  )
}

export default App