import React from 'react';
import './style.css';

class Card extends React.Component {

    render() {
        return (
            <div className='db-card'>
                <div className="db-card-header">{this.props.title || React.createElement(this.props.header)}</div>
                <div className="db-card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;
