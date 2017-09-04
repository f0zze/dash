import React from 'react';
import './Navigation.css';
import NavMenu from './NavMenu';
import User from './User';

const Navigation = (props) => {
    return (
        <div className="main-nav">
            <div className="nav nav--left">
                <div className="nav__logo">
                    <div>ecommpay</div>
                </div>
                <li className="nav__search">
                    <input placeholder="Search" type="input"/>
                </li>
            </div>
            <div className="nav nav--right">
                <NavMenu/>
                <User/>
            </div>
        </div>
    );
};

export default Navigation;