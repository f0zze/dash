import React from 'react';
import Datamap from 'datamaps';

class Map extends React.Component {

    componentDidMount() {
        this.map = new Datamap({
            element: this.char,
            fills: {
                defaultFill: 'rgba(23,48,210,0.9)' // Any hex, color name or rgb/rgba value
            }
        });
    }

    render() {
        return (
            <div style={{height: 400}} ref={(char) => this.char = char}>

            </div>
        );
    }
}

export default Map;
