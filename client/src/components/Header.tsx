import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo_crewmeister_white.svg';

const Header: React.FC = () => (
  <header>
    <h1 className='logo'><img src={Logo} alt="Crewmeister logo"/></h1>
    <nav id='nav-main'>
      <a href="#" className="icon-live"></a>
      <a href="#" className="icon-time-tracking"></a>
      <a href="#" className="icon-time-tracking-report"></a>
      <a href="#" className="icon-shift-planner"></a>
      <Link to="/report" className="icon-absence-management active"></Link>
      <a href="#" className="icon-settings"></a>
      <a href="#" className="icon-chat"></a>
    </nav>
    <nav className='user-actions'>
      <a href="#" className="icon-alarm"></a>
      <a href="#" className="icon-my-profile"></a>
    </nav>
  </header>
)

export default Header
