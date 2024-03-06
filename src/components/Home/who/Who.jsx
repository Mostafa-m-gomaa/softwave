import React from 'react'
import shape from '../../../assets/elements/Asset 14.png'
import person from '../../../assets/elements/Asset 13.png'
import { Link } from 'react-router-dom'
import './who.css'
const Who = () => {
  return (
   <div className="who">
    <div className="container">
    <div className="left">
       <h1>who we are ?</h1>
       <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
</div>
<Link to="/about">Find More out</Link>
    </div>
    <div className="right">
        <img src={shape} alt="" className="shape" />
        <img src={person} alt="" className="person" />
    </div>
    </div>
    </div>
  )
}

export default Who