import React from 'react'
import { useState , useEffect ,useRef} from 'react'

const Navbar= () => {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log("Navbar re-rendering")
  // })
  const a=useRef(0)
  useEffect(() => {
    a.current =a.current +1
    console.log(`the rerendering without letting the page change ${a.current}`)
  })

  const btnRef=useRef()
  useEffect(() => {
    btnRef.current.style.backgroundColor="pink"
  }, [])
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
        <button ref={btnRef} onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    
    </div>
  )
}

export default Navbar