import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div className='footer'>
        <>
        <img src= {logo} alt="logo" height="80px"/>
        <div>
        <h5>Made by</h5>
        <ul>
        <li>Marcos</li>
        <li>Sheyla</li>
        <li>Michelle</li>
        </ul>
        </div>
        <a href='https://github.com/Sheylare/doggyInn-app-client'>Github Link</a>
        </>
    </div>
  )
}

export default Footer