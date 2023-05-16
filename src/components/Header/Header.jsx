import React from 'react'
import './Header.scss'
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import upload from '../../assets/images/icons/upload.svg'
import search from '../../assets/images/icons/search.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'

const Header = () => {
  return (
    <div>
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="brainflix logo" />
            <div className="navbar">
              <i class="navbar__search-icon">
                <img src={search} alt="search" />
              </i>
              <input className="navbar__search" type="text" placeholder="Search" />
              <img className="navbar__avatar" src={avatar} alt="avatar" />
            </div>
            <i class="nav__upload-icon">
                <img src={upload} alt="upload" />
            </i>
            <button className="nav__upload-btn">UPLOAD</button>
        </nav>
    </div>
  )
}

export default Header