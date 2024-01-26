import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './Routes/Router'
import { Toaster } from 'react-hot-toast';  // for showing small alerts

function App() {
 

  return (
    <>
     <Toaster  position="top-center"  reverseOrder={false} />

     <Router/>
   
    </>
  )
}

export default App
