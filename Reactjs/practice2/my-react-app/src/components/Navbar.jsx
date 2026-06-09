import React from 'react'
import { useState } from 'react'

const Navbar= () => {
  const [count, setCount] = useState(0)
  return (
    <div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        i failed<br />
        <button onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    
    </div>
  )
}

export default Navbar