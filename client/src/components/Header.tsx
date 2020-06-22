import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header>
    <h1 className='logo'><img src="https://d33wubrfki0l68.cloudfront.net/f140ee3478696725fd905f311242bfc48579b2f5/dcaca/images/logo_crewmeister_white.svg" alt="Crewmeister logo"/></h1>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/report">Report</Link>
    </nav>
  </header>
)

export default Header
