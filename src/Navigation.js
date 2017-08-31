import React from 'react';
import './Navigation.css';
import NavMenu from './NavMenu';
import Avatart from './User';
import LogoSrc from './ecommpay.png';

const Navigation = (props) => {
    return (
        <div className="main-nav">
            <div className="nav nav--left">
                <div className="nav__logo">
                    <div>Logo</div>
                </div>
                <li className="nav__search">
                    <input placeholder="Search" type="input"/>
                </li>
            </div>
            <div className="nav nav--right">
                <NavMenu/>
                <Avatart/>
            </div>
        </div>
    );
};

export default Navigation;