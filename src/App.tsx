import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Navs from './components/Navs'
import Sliders from './components/Sliders'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navs/>
      <Sliders/>
      <Login/>
      
      {/* <Nav/> */}


      <Footer/>


      </>
    
  )
}

export default App
