import React from 'react';
import Datamap from 'datamaps';

class Map extends React.Component {

    componentWillMount() {
        this.listener = () => {
            if (this.map) {
                this.map.resize();
            }
        };
        window.addEventListener('resize', this.listener)
    }

    componentDidMount() {
        this.map = new Datamap({
            element: this.char,
            responsive: true,
            fills: {
                defaultFill: 'rgba(29, 100, 159,0.9)' // Any hex, color name or rgb/rgba value
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.listener);
    }

    render() {
        return (
            <div style={{height: 400}} ref={(char) => this.char = char}>

            </div>
        );
    }
}

export default Map;
