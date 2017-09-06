import React from 'react';
import cn from 'classnames';

import './style.css';

class Popup extends React.Component {
    static defaultProps = {
        width: 100
    };
    state = {
        open: false
    };

    render() {
        const style = cn('popup', {
            'popup--open': this.props.open
        });

        return (
            <div style={{width: this.props.width}} className="popup">
                <div className="popup__header">{this.props.title}</div>
                <div className="popup__body">
                    {this.props.children}
                </div>
                <div className="popup__footer">
                    Done
                </div>
            </div>
        );
    }

}

export default Popup;