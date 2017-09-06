import React from 'react';
import './style.css';

const FormCard = (props) => {
    return (
        <div className="form-card">
            {props.children}
        </div>
    );
};

export default FormCard;