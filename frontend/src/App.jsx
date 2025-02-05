import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Couplename from './Components/Couplename'
import Form from './Components/Form'
import PhotoGallery from './Components/PhotoGallery'

function App() {

  return (
    <>
    <Navbar/>
    <Couplename/>
    <PhotoGallery/>
    <Form/>
    </>
  )
}

export default App
