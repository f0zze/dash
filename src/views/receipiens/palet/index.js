import React from 'react';
import './style.css';

const Palet = (props) => {
    return (
        <div className="color-palett">
            <div className="color-for">
                <div className="color-title">
                    {props.colorFor}
                </div>
                <div className="color-hash">
                    {props.hash}
                </div>
            </div>

            <div style={{backgroundColor:props.hash}} className="color-circle">

            </div>
        </div>
    );
}

export default Palet;