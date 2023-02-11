import React from 'react'
import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
    <div className='navbar'>
         <nav className='nav'>
            <Link to="/" className='logo'>MEETING-PORT</Link>
         <div>
            <Link to="/" className='link'>All Meetings</Link>
            <Link to="/my-meetings" className='link'>My Meetings</Link>
            <Link to="/add-meetings" className='link'>Add Meetings</Link>
         </div>

         </nav>

    </div>
  )
}

export default Navbar;