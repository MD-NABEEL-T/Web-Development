import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-slate-800 text-white py-2'>
        <div className="logo">
            <span className="font-bold text-xl mx-8">My Todo List</span>
        </div>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all-duration-75'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all-duration-'> My Tasks</li>
        </ul>
    </nav>
)
}

export default Navbar