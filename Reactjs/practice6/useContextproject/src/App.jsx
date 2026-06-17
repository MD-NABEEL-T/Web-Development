import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button' 
import {createContext} from 'react'
export const UserContext = createContext()

function App() {
  
  return (
  <>
  <UserContext.Provider value="Nabeel">
  <Button />
  </UserContext.Provider>
  </>
  )
}

export default App
