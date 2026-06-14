import React from 'react'
import { useState } from 'react'
import './EventHandle.css'

function EventHandle() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Nabeel")
    const handle=()=>{
        alert("button clicked")
    }
  return (
    <>
    <button onClick={handle}>
        click me
    </button>
    <div className="red">alright</div>
    input: <input type="text" onChange={(e)=>setName(e.target.value)} />
    
    <p> Hello {name}</p>
    </>
    
)
}

export default EventHandle