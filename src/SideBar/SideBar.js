import React from 'react';
import './style.css';

const options = ['Analytics', 'Projects', 'Payments', 'Finance', 'Risk-management', 'Customers', 'Support'];

class SideBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                {options.map((option, index) => <div key={index} className="side-bar__item">{option}</div>)}
            </div>
        );
    }
}

export default SideBar;