import React from 'react';
import './NavMenu.css';
const menuItems = [
    'Accounts',
    'API',
    'Feedback',
    'Notification',
];

const NavMenu = () => {
    return (
        <div className="menu">
            {
                menuItems.map(item =>
                    <li className="menu__item">{item}</li>)
            }
        </div>
    );
};

export default NavMenu;