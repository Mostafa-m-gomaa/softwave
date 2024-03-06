import React from 'react'
import Landing from './landing/Landing'
import './home.css'
import Who from './who/Who'

const Home = () => {
  return (
    <div className="home">
        <Landing />
        <Who />
    </div>
  )
}

export default Home