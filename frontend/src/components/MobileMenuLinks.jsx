import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenuLinks = () => {
  return (
        <div className="menu_container block lg:hidden w-full h-fit shadow-md">
            <ul className='font-medium text-md flex flex-col py-3'>
                <li className='border-b px-5 md:px-10 py-5 hover:bg-gray-100'><Link to="/">Home</Link></li>
                <li className='border-b px-5 md:px-10 py-5 hover:bg-gray-100'><Link to="/bookmarks">Bookmarks</Link></li>
                <li className='border-b px-5 md:px-10 py-5 hover:bg-gray-100'><Link to="/foryou">For You</Link></li>
                <li className='border-b px-5 md:px-10 py-5 hover:bg-gray-100'><Link to="/login">Login</Link></li>

            </ul>
        </div>
  )
}

export default MobileMenuLinks