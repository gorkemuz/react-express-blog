import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">HOME<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <Link className='add-post' to='/post/add'><div>ADD POST</div></Link>            
            </div>
        </nav>
      );
    }

export default Header;