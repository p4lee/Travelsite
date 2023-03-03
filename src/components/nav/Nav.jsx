import React from 'react'
import {Link } from 'react-router-dom';
import './nav.css'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className='nav'>
  <nav className="navbar">
  <div className="navbar__logo">
    <a href= '/'>
    <img className="logo" src={logo} alt="Logo" />
    </a>
  </div>
  <div className="navbar__links">
    <div className='link'><a href="/">Etusivu</a></div>
    <div className='link'><a href="/Rantalomat">Rantalomat</a></div>
    <div className='link'><a href="/Akkilahdot">Äkkilähdöt</a></div>
    <div className='link'><a href="/Budjettimatkat">Budjettimatkat</a></div>
  </div>
</nav>
</div>
);
}

export default Nav