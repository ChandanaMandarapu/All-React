import React from 'react'
import Swaure from './Swaure'
import Input from './Input'
import { useState } from 'react'
import "./App.css"
function App() {
    const [colorValue,setColorValue] = useState("")
    
  return (
    <div className='App'>
        <Swaure 
        colorValue={colorValue}
        
        />
        <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        
        />
        </div>
  )
}

export default App