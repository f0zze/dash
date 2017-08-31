import React from 'react';
import './User.css';
import bill from './BillGates.png';

const Avatar = () => {
    return (
        <div className="user">
            <div className="user-avatar">
                <img src={bill} className="img-fluid" alt="Bill Gates" />
            </div>
            <div className="user-name">Bill Gates</div>
        </div>

    )
};

export default Avatar;