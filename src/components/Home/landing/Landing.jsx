import React from 'react'
import './landing.css'
import landing from '../../../assets/elements/Asset 10.png'
import search from '../../../assets/elements/Asset 5.png'
import profile from '../../../assets/elements/Asset 7.png'
import mopile from '../../../assets/elements/Asset 8.png'
import surface from '../../../assets/elements/Asset 4.png'
import qube from '../../../assets/elements/cube.png'

import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
        <img src={landing} alt="" className="back" />
        <div className="container">
           <div className="left">
           <h1>we convert your </h1>
           <h1>ideas to real</h1>
           <p>Lorem ipsum dolor sit
amet, consectetuer</p>
<Link to="/login">get start</Link>
           </div>
           <div className="right">
            <img src={mopile} alt="" className="mopile" />
            <img src={surface} alt="" className="surface" />
            <img src={qube} alt="" className="qube" />
            <img src={profile} alt="" className="profile" />
            <img src={search} alt="" className="search" />
             
           </div>
        </div>
    </div>
  )
}

export default Landing