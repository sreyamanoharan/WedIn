import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Couplename from './Components/Couplename'
import Form from './Components/Form'
import PhotoGallery from './Components/PhotoGallery'
import Schedule from './Components/Schedule'

function App() {

  return (
    <>
    <Couplename/>
    <Form/>
    <PhotoGallery/>
    <Schedule/>

    </>
  )
}

export default App
