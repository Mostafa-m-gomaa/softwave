import React from 'react'
import logo from '../../assets/elements/logo.png'
import { Link } from 'react-router-dom'
import reg from '../../assets/elements/Asset 28.png'
import './header.css'
import log from '../../assets/elements/Asset 29.png'

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="left">
            <img src={logo} alt="" />
            <Link to="">service</Link>
            <Link to="">projects</Link>
            <Link to="">our clients</Link>
            <Link to="">about us</Link>
            </div>
            <div className="right">
            <Link to=""><img src={reg} alt="" />Register</Link>
            <Link to=""><img src={log} alt="" />Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Header