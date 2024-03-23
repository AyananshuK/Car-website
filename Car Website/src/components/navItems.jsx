import React from 'react'
import './navItems.css'
import { Link } from 'react-router-dom'
const NavItems = ({nav, navOnClick}) => {
  return (
    <div>
      <li>
        <Link className={nav.active?'active' : undefined}  to={nav.link} onClick={()=>navOnClick(nav._id)}>
          {nav.name === 'Home'? <i className='bi bi-house-door' /> : nav.name}
        </Link>
     </li>
    </div>
  )
}

export default NavItems
