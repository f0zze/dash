import React from 'react';
import './Navigation.css';
import NavMenu from './NavMenu';

const Navigation = (props) => {
    return (
        <div className="nav">
            <div className="nav__right">
                <li>Logo</li>
                <li className="nav__search">
                    <input type="Search"/>
                </li>
            </div>
            <div className="nav--left">
                <NavMenu />
            </div>
            <div className="nav--left">
                Avatar
            </div>
        </div>

    );

};

export default Navigation;