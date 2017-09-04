import React from 'react';
import './Card.css';

class Card extends React.Component {

    render() {
        return (
            <div className='db-card'>
                <div className="db-card-header">{this.props.title}</div>
                <div className="db-card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;
