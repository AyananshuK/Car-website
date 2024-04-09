import React,{useState, useContext} from 'react'
import './header.css'
import NavItems from './navItems'
import navItemsData from '../data/navItemsData'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../App'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [navItems, setnavItems] = useState(navItemsData)
    const location = useLocation()
    const {library, setLibrary} = useContext(AppContext)



    const handleToggleMenu = ()=>{
        setOpen(!open)
    }

    const handleNavOnClick = (id)=>{
        // console.log(id)
        const newNavItems = navItems.map(nav=>{
            nav.active = false
            if(nav._id == id) {
                nav.active = true
            }
            return nav
        })
        setnavItems(newNavItems)
    }

  return (
    <header>
        <a href='/' className='logo' style={location.pathname==='/'?{color: '#000000'}:{color:'#0eaccc'}}>Cars</a>
        <div>
            <Link to='/library' className='like'>
                <i className='bi bi-heart-fill'></i>
                <span className='likedNumbers'>{library.length}</span>
            </Link>
            <a href="#" className='menu' onClick={handleToggleMenu}>
                {open? <i className='bi bi-x-lg'></i> : <i className='bi bi-list'></i>}
            </a>
        </div>
        <ul className={`nav ${open? 'active': undefined}`}>
            {navItems.map(nav => (
                <NavItems key={nav._id} nav={nav} navOnClick={handleNavOnClick}/>
            ))}
        </ul>
    </header>
  )
}

export default Header
