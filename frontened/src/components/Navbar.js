import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
   
  return (
    <div>
    <img className='logo' src="https://imgs.search.brave.com/_bWH5cqiunFsYFcKAO9TAAtxk_l1pxedXABhXGKzKbs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA4/MzQ3NTIxL3Bob3Rv/L3dlLWFyZS10aGUt/d29ybGQud2VicD9i/PTEmcz0xNzA2Njdh/Jnc9MCZrPTIwJmM9/U2l0NVdsRVlzNi1H/VE9kc2tIbDIwY3hm/SUk0YTluR3hlWG1M/b0w5bFYtcz0" alt='logo'></img>
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
    </ul>
      
    </div>
  )
}

export default Navbar
