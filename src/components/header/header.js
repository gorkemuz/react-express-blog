import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
      return (
        <div className="flex-container">
            <Link to='/'><div>HOME</div></Link>
            <Link to='/post/add'><div>ADD POST</div></Link>
        </div> 
      );
    }

export default Header;