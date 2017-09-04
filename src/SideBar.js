import React from 'react';
import './SideBar.css';

const menuBar = ["Options1","Options1","Options1","Options1","Options1","Options1","Options1"];

const SideBar = () => {
    return (
        <div className="side-menubar">
            {
                menuBar.map(item => (<div className="side-menubar__item">{item}</div>))
            }
        </div>
    )
};

export default SideBar;