import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
   
  return (
    <div>
    <img className='logo' src="https://imgs.search.brave.com/7J6pqzFdHsAuRIPKyYhsE6M_cECerZ2sXII7rdU_IkA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzU0/MDYxODQvcGhvdG8v/cnViYmlzaC1pbi1h/LWJpbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9X2U5bWJ1/Yjh4b2k1OTdGWWFR/RzhuY29JLW15R3oz/TE1jQlhXQmozc3Z1/OD0" alt='logo'></img>
    <ul className='nav-ul'>
        <li>
            <Link to="/">Waste List</Link>
        </li>
        <li>
            <Link to='/add'>Add Products</Link>
        </li>
        <li>
            <Link to="/update/:id">Update</Link>
        </li>
        <li>
            <Link to="/schedule">Schedule</Link>
        </li>
        <li>
            <Link to="/">Login</Link>
        </li>
    </ul>
      
    </div>
  )
}

export default Navbar
