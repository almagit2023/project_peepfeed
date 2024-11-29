import React from "react"
import './NavBar.css';
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
      <div className="navBar-bg">
        <ul>
          <li>
            <Link to="/" className='link-style'>
              Home
            </Link>
          </li>
          
          <li>
            <Link to="/aboutus" className='link-style'>
              About Us
            </Link>
          </li>
        
          <li>
            <Link exact to="/checkpeep" className='link-style'>
              Check Peep
            </Link>
          </li>
        
          <li>
            <Link exact to="/stories" className='link-style'>
              Stories
            </Link>
          </li>
          <li>
            <Link exact to="/whatsnew" className='link-style'>
              What's New
            </Link>
          </li>
        
          <li>
            <Link exact to="/contact" className='link-style'>
              Contact Us !
            </Link>
          </li>
        </ul>
        <div className="userManagement">
          <ul>
            <li>
              <Link exact to="/login" className='link-style'>
                LogIn
              </Link>
            </li>
         
            <li>
              <Link exact to="/register" className='link-style'>
                Register!
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar
