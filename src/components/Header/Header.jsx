import './Header.scss'
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import upload from '../../assets/images/icons/upload.svg'
import search from '../../assets/images/icons/search.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <NavLink to="/">
          <img className="nav__logo" src={logo} alt="brainflix logo" />
        </NavLink>
        <div className="navbar">
          <i className="navbar__search-icon">
            <img src={search} alt="search" />
          </i>
          <input className="navbar__search" type="text" placeholder="Search" />
          <img className="navbar__avatar" src={avatar} alt="avatar" />
          <div className="nav-sec">
            <i className="nav-sec__upload-icon">
              <img src={upload} alt="upload" />
            </i>
            <NavLink to="/upload">
              <button className="nav-sec__upload-btn">
                UPLOAD
              </button>
            </NavLink>
            <img className="nav-sec__avatar--tablet" src={avatar} alt="avatar" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header