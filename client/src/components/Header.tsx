import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo_crewmeister_white.svg';

const Header: React.FC = () => (
  <header>
    <h1 className='logo'><img src={Logo} alt="Crewmeister logo"/></h1>
    <nav id='nav-main'>
      <a href="/" className="icon-live"><span>Live</span></a>
      <a href="/" className="icon-time-tracking"><span>Time Tracking</span></a>
      <a href="/" className="icon-time-tracking-report"><span>Tracking Report</span></a>
      <a href="/" className="icon-shift-planner"><span>Shift Planner</span></a>
      <Link to="/" className="icon-absence-management active"><span>Absence Management</span></Link>
      <a href="/" className="icon-settings"><span>Setting</span></a>
      <a href="/" className="icon-chat"><span>Chat</span></a>
    </nav>
    <nav className='user-actions'>
      <a href="/" className="icon-alarm"><span>Notifications</span></a>
      <a href="/" className="icon-my-profile"><span>Profile</span></a>
    </nav>
  </header>
)

export default Header
