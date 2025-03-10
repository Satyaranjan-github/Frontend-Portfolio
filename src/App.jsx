import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Skills from './Components/Skills'


const App = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <>
      <Navbar/>
      <div className="container">
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
      </div>
    </>
  )
}

export default App


