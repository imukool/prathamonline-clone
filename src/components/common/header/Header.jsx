import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <div className="logo">
            <Link to='/'>
              <img src="https://www.prathamonline.com/images/pratham.png" alt="Pratham Test Prep" />
            </Link>
          </div>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li className="dropdown">
              <Link to='/prep-modules'>PREP MODULES</Link>
            </li>
            <li className="dropdown">
              <Link to='/courses'>COURSES</Link>
            </li>
            <li className="dropdown">
              <Link to='/results'>RESULTS</Link>
            </li>
            <li>
              <Link to='/blog'>BLOG</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
            <li>
              <Link to='/career'>CAREER</Link>
            </li>
            <li>
              <Link to='/login'>LOGIN</Link>
            </li>
            <li>
              <Link to='/partners'>PARTNERS</Link>
            </li>
          </ul>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
