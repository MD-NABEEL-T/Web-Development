import {React,useContext} from 'react'
import Component1 from './Component1'
import {UserContext} from '../App'
function Button() {
  const user = useContext(UserContext);
  return (
    <div>
        <button>
            <span><Component1 /></span>
            I am a button
            {user}
        </button>
        
    </div>
  )
}

export default Button